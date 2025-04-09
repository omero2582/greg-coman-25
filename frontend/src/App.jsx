import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import Home from './pages/Home/Home';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Headshots from './pages/Services/old-unused/Headshots/Headshots';
import Testimonials from './pages/Testimonials/Testimonials';
import Pricing from './pages/Pricing/Pricing';
import ServiceDetail from './pages/Services/ServiceDetail/ServiceDetail';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import FineArts from "./pages/FineArts/FineArts";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className='grid grid-rows-[auto_1fr_auto] min-h-[100vh] items-start'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/reviews" element={<Testimonials/>} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/finearts" element={<FineArts/>} />
        {/* <Route path="/services/myCustomLayoutForThisService" element={<ServiceCustomDifferentLayout/>} /> */}
        <Route path="/services/:serviceSlug" element={<ServiceDetail/>} />
        
        {/*below to be removed*/}
        <Route path="/headshots" element={<Headshots />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}
