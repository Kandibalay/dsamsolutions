// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Home } from './pages/Home';
// import { Toaster } from 'react-hot-toast';
// import { NotFound } from './pages/NotFound';
// import { useEffect } from 'react';

// export default function App() {  
//   return (
//     <>
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             borderRadius: '12px',
//             background: '#1e5174',
//             color: '#fff',
//           },
//         }}
//       />
      
//       <div className="min-h-screen bg-white">
//         <Routes>
//           {/* Public Routes with Navbar */}
//           <Route path="/" element={<><Navbar /><Home /></>} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </>
//   );
// }


import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Toaster } from 'react-hot-toast';
import { NotFound } from './pages/NotFound';
import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

ReactPixel.init(PIXEL_ID, undefined, {
  autoConfig: true,
  debug: false,
});

export default function App() {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.pageView();
  }, [location]);

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
