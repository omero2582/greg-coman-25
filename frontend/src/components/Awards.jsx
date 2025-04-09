import React from 'react'
// Awards Images
import Award1 from "../pages/Home/assets/Award1.png";
import Award2 from "../pages/Home/assets/Award2.jpg";
import Award3 from "../pages/Home/assets/Award3.jpg";
import { useGlobal } from '@/hooks/cms/useGlobals';
import { urlFor } from '@/sanity-cms/sanityClient';


export default function Awards() {
  const { data, error, isPending, isFetching } =  useGlobal();
  console.log('Awards')

  if(!data?.awardsSection?.[0]){
    return null;
  }

  const { title, awards } = data.awardsSection[0]; 

  return (
    <div className="py-16 w-full flex flex-col justify-center items-center space-y-6 px-4">
      {title &&
      <div className="text-(--color-brandTeal-700) text-xl text-center">
        {title}
      </div>}
      {awards &&
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4 md:gap-8">
        {awards.map((a, i) => (
          a.images?.[0] && 
          <img
            key={i}
            loading='lazy'
            src={urlFor(a.images?.[0])?.url()}
            alt={a.name || `Award ${i}`}
            className="h-auto w-full md:w-[30%] object-contain"
          />
        ))}
      </div>}
    </div>
  )
}
