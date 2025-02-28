import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Family from './pages/Family/Family';
import Home from './pages/Home/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

export default function App() {

  return (
    <BrowserRouter>
      <div className='grid grid-rows-[auto_1fr_auto] min-h-[100vh] items-start'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
      </Routes>
      {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}