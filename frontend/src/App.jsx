import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Headshots from './pages/Services/old-unused/Headshots/Headshots';
import Testimonials from './pages/Testimonials/Testimonials';
import PricingPage from './pages/PricingPage/PricingPage';
import ServiceDetail from './pages/Services/ServiceDetail/ServiceDetail';
import Services from './pages/Services/Services';

export default function App() {

  return (
    <BrowserRouter>
      <div className='grid grid-rows-[auto_1fr_auto] min-h-[100vh] items-start'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/services" element={<Services/>} />
        {/* <Route path="/services/myCustomLayoutForThisService" element={<ServiceCustomDifferentLayout/>} /> */}
        <Route path="/services/:serviceSlug" element={<ServiceDetail/>} />
        
        {/*below to be removed*/}
        <Route path="/headshots" element={<Headshots />} />
      </Routes>
      {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}