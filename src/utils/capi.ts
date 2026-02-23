interface UserData {
  email?: string;
  phone?: string;
}

interface CustomData {
  [key: string]: string | number;
}

export async function sendCAPIEvent(
  eventName: string,
  userData?: UserData,
  customData?: CustomData
) {
  try {
    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventSourceUrl: window.location.href,
        userData,
        customData,
      }),
    });
  } catch (error) {
    console.error('Failed to send CAPI event:', error);
  }
}
