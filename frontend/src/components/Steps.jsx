import { useGlobal } from '@/hooks/cms/useGlobals';
import { PortableText } from '@portabletext/react';
import React from 'react'
import { useNavigate } from 'react-router';

export default function Steps() {
  const { data, error, isPending, isFetching } =  useGlobal();
  const navigate = useNavigate();
  console.log('Steps')

  if(!data?.stepsSection?.[0]){
    return null;
  }

  const { title, subtitle, steps, buttonText } = data.stepsSection[0];

  return (
    <div className="py-16 w-full flex flex-col justify-center items-center space-y-8 bg-[#8DB5CE] px-4">
      <div className="w-full flex flex-col justify-center items-center space-y-2">
        {title && 
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
          {title}
        </h2>}
        {subtitle && 
        <div className="text-white text-center">
          {subtitle}
        </div>}
      </div>

      {steps &&
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {steps.map(({title, description}, i) => (
        <div key={i} className="bg-[#77AACA] w-full max-w-[250px] flex flex-col space-y-4 items-center py-8 px-6 rounded-lg shadow-xl border border-[#1E376C] text-start hover:shadow-2xl transition-all duration-200 ease-in-out cursor-pointer">
          <div className="text-[#1E376C] w-full text-3xl">
            STEP {i+1}:
          </div>
          {title && 
          <div className="text-[#1E376C] w-full text-xl">
            {title}
          </div>}
          {description && 
          <div className='!space-y-2 prose prose-color-[white] leading-normal'>
            <PortableText value={description} />
          </div>}
        </div>
        ))}
      </div>}

      {buttonText &&
      <button 
        className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105 mt-4"
        onClick={() => navigate('/contact')}
      >
        {buttonText}
      </button>}
    </div>
  )
}
