import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Headshots() {
  return (
      <div className='max-w-[1440px] mx-auto w-full grid bg-[#FFFCF9] justify-center'>
        {/**leading-[72px] */}
        <div className='mx-auto mt-4 mb-[12px] grid justify-items-center'>
          <h1 className='text-[52px] leading-[1] uppercase'>Headshots</h1>
          <p className='text-[1.15rem]'>Professional portrait focused on you</p>
        </div>
        <MyCarousel/>
        <About/>
        <Packages/>
      </div>
  )
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img1 from './assets/GEC_7418.jpg'
import img2 from './assets/GEC_0719 high res.jpg'
import imgReason from './Greg by Jody IMG_8585-Exposure high res.jpg'
import { AspectRatio } from "@/components/ui/aspect-ratio"
const modules = import.meta.glob('./assets/*', { eager: true });
const images = Object.values(modules).map(m => m.default);

function MyCarousel(){
  return (
    <div>
      <Carousel className="relative mx-2" opts={{loop: true}} plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent className='-ml-2'>
        {images.map((img, i) => (
          <CarouselItem className="pl-2 flex-none">
           {/* <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4"> */}
          {/* <div className="">
            <AspectRatio ratio={2 / 3}> */}
            {/* w-[240px]  */}
              <img src={img} alt={`${i}-headshot-img`} className="rounded-md h-[360px] w-auto object-cover" />
            {/* </AspectRatio>
          </div> */}
          </CarouselItem>
        ))}
        {/* <CarouselItem className="basis-1/3">...</CarouselItem>
        <CarouselItem className="basis-1/3">...</CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0"/>
      <CarouselNext className="absolute right-0"/>
    </Carousel>
    </div>
  )
}

function About(){
  return (
    <div className='my-18 gap-x-14 grid grid-flow-col max-w-[880px] justify-self-center'>
      <div className='space-y-2 self-center text-[1.25rem] leading-[1.55]'>
        <p>A professional profile portrait for your business marketing and social media presence is a key element to the success of your business. A stunning headshot will make a difference and leave a positive first impression.
        </p> <p>I'm sure you’ve seen many profile pictures of people that are unflattering - whether too small, too dark, too cluttered, too blurry or simply out of date. 
        </p> <p>I will help capture your best side. I’ll make you feel comfortable, and set aside your fears. It's really not that scary! 
        </p> <p>Book your shoot now You’re worth it!
          </p>
      </div>
      <img src={imgReason} className='h-[360px] rounded-md'></img>
    </div>
  )
}



import { packages } from './packages';
import Autoplay from 'embla-carousel-autoplay'

function Packages(){
  const [selectedTab, setSelectedTab] = useState('Business');
  // const gregLocation = '10737 Sixth Line, Georgetown, ON, Canada'

  const selectedPackage = packages.find(p => p.name === selectedTab)

  return (
    <div className='max-w-[880px] w-full justify-self-center'>
      <div>
        {packages.map(p => (
        <button 
          key={p.name}
          onClick={() => setSelectedTab(p.name)}
          className='text-[1.2rem] px-4 py-1 bg-sky-200 hover:bg-sky-300'
        >
          {p.name}
        </button>
        ))}
      </div>
      <div className='text-[1.15rem] '>
        <div className='my-[10px] leading-[1.4]'>
          <h2 className='font-bold text-[1.35rem]'>
            {selectedPackage.name}
          </h2>
          <h3 className='text-[1.03rem]'>{selectedPackage.caption}</h3>
          <p className='text-[1.1rem]'>
            {`${selectedPackage.price} | ${selectedPackage.duration} | `}
            {/* <a href={`http://maps.google.com/?q=${selectedPackage.location.label}`}> */}
            <a target='_blank' href={selectedPackage.location.link}>
              {selectedPackage.location.label}
            </a>
          </p>
        </div>
        <div className=''>
          <ReactMarkdown
            // allowedElements={['p', 'ul', 'li', 'br']}
            // unwrapDisallowed={true} // Prevents rendering disallowed elements as text
            breaks
            components={{
              p: ({ children }) => <p className="">{children}</p>,
              ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
              li: ({ children }) => <li className="ml-4">{children}</li>,
              br: () => <br className="block my-2" />, // Add spacing for line breaks
            }}
          >
            {selectedPackage.description}
          </ReactMarkdown>
          <div>
            <h3 className='font-bold'>Features:</h3>
            <ReactMarkdown
              // allowedElements={['p', 'ul', 'li', 'br']}
              // unwrapDisallowed={true} // Prevents rendering disallowed elements as text
              breaks
              components={{
                p: ({ children }) => <p className="mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
                li: ({ children }) => <li className="ml-4">{children}</li>,
                br: () => <br className="block my-2" />, // Add spacing for line breaks
              }}
            >
              {selectedPackage.features}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}