import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";//react router package
import './index.css';
import App from './App';
import { Register } from './pages/Register';
import { Nopage } from './pages/Nopage';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='max-w-4xl mx-auto h-screen'>
      <BrowserRouter>
        <Navbar />
        <div className='flex justify-center'>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </React.StrictMode >
);
