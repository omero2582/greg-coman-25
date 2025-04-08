import { useGlobal } from '@/hooks/cms/useGlobals';
import React from 'react'
import Familyjpg from "../pages/Home/assets/Familyjpg.jpg";
import { urlFor } from '@/sanity-cms/sanityClient';
import { useNavigate } from 'react-router';

export default function Booking() {
  const { data, error, isPending, isFetching } =  useGlobal();
  const navigate = useNavigate();
  console.log('Booking')

  if(!data?.bookingSection?.[0]){
    return null;
  }

  const { title, subtitle, images, buttonText } = data.bookingSection[0]; 

  return (
    <div className="py-16 w-full flex flex-col justify-center items-center space-y-6 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-(--color-brandTeal-700)">
        {title}
      </h2>
      <div className="text-xl md:text-2xl text-(--color-brandTeal-700)">
        {subtitle}
      </div>
      <button 
        className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105 mb-6"
        onClick={() => navigate('/contact')}  
      >
        {buttonText}
      </button>
      {images?.[0] &&
      <img
        loading='lazy'
        src={urlFor(images?.[0])?.url()}
        alt="Booking Photo"
        className="h-64 md:h-96 w-full max-w-4xl object-cover rounded-xl shadow-2xl"
      />}
    </div>
  )
}
