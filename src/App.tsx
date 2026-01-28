import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Toaster } from 'react-hot-toast';
import { NotFound } from './pages/NotFound';
import { useEffect } from 'react';

export default function App() {  
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '12px',
            background: '#1e5174',
            color: '#fff',
          },
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Public Routes with Navbar */}
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
