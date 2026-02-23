import { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

const PIXEL_ID = process.env.VITE_META_PIXEL_ID;
const ACCESS_TOKEN = process.env.VITE_META_ACCESS_TOKEN;

function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { eventName, eventSourceUrl, userData, customData } = req.body;

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: eventSourceUrl,
        action_source: 'website',
        user_data: {
          client_ip_address: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
          client_user_agent: req.headers['user-agent'],
          ...(userData?.email && { em: hashData(userData.email) }),
          ...(userData?.phone && { ph: hashData(userData.phone) }),
        },
        ...(customData && { custom_data: customData }),
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('CAPI Error:', error);
    return res.status(500).json({ error: 'Failed to send event to Meta' });
  }
}
