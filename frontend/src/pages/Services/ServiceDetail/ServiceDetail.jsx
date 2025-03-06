import React, { Children, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useServiceQuery } from '@/hooks/useServices';
import validator from 'validator';
import { useParams } from 'react-router';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default function ServiceDetail() {
  const serviceSlug = validator.escape(useParams().serviceSlug);

  const {data, isPending, isLoading, error} = useServiceQuery(serviceSlug);

  if(isPending){
    return <div>Loading..</div>
  }

  if(error || !data){
    return <div>Service Not Found</div>
  }

  const { name, caption, description, descriptionImage, images, slug, packages } = data

  return (
      <div className='max-w-[1440px] mx-auto w-full grid bg-[#FFFCF9] justify-center'>
        {/**leading-[72px] */}
        <div className='mx-auto mt-4 mb-[12px] grid justify-items-center'>
          <h1 className='text-[52px] leading-[1] uppercase'>{name}</h1>
          <p className='text-[1.15rem]'>{caption}</p>
        </div>
        <MyCarousel imagesRaw={images}/>
        <About descriptionRaw={description} descriptionImageRaw={descriptionImage}/>
        <Packages packagesRaw={packages}/>
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
// import imgReason from './Greg by Jody IMG_8585-Exposure high res.jpg'
import { AspectRatio } from "@/components/ui/aspect-ratio"
// const modules = import.meta.glob('./assets/*', { eager: true });
// const images = Object.values(modules).map(m => m.default);

function MyCarousel({imagesRaw}){
  // const images = imagesRaw.map(i => urlFor(i)?.width(550).height(310).url())
  const images = imagesRaw.map(i => urlFor(i)?.url())

  return (
    <div>
      <Carousel className="relative mx-2" opts={{loop: true}} plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent className='-ml-2'>
        {images.map((img, i) => (
          <CarouselItem  key={i} className="pl-2 flex-none">
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

function About({descriptionRaw, descriptionImageRaw}){

  return (
    <div className='my-18 gap-x-14 grid grid-flow-col max-w-[880px] justify-self-center'>
      <div className='space-y-2 self-center text-[1.25rem] leading-[1.55]'>
      {Array.isArray(descriptionRaw) && <PortableText value={descriptionRaw} />}
      </div>
      {descriptionImageRaw && <img src={urlFor(descriptionImageRaw)?.url()} className='h-[360px] rounded-md'></img>}
    </div>
  )
}



// import { packages } from './packages';
import Autoplay from 'embla-carousel-autoplay'
import { client } from '@/sanity-cms/sanityClient';



function Packages({packagesRaw}){
  const [selectedTab, setSelectedTab] = useState(packagesRaw[0].name);
  // const gregLocation = '10737 Sixth Line, Georgetown, ON, Canada'

  // const selectedPackage = packages.find(p => p.name === selectedTab)
  const selectedPackage = packagesRaw.find(p => p.name === selectedTab)

  return (
    <div className='max-w-[880px] w-full justify-self-center '>
      <div>
        {packagesRaw.map(p => (
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
            <a target='_blank' href={selectedPackage.location.url}>
              {selectedPackage.location.label}
            </a>
          </p>
        </div>
        <p className='font-[700]! italic'>test</p>
        <div className='prose prose-lg prose-li:my-[0px] prose-black prose-strong:font-bold prose-p:mb-0 prose-ul:mt-0'>
          {Array.isArray(selectedPackage.description) && 
            <PortableText 
              value={selectedPackage.description} 
              components={{
                // marks: {
                //   strong: ({children}) => <strong className='!font-bold'>{children}</strong>
                // }
                // list: {
                //   bullet: ({children}) => <ul className="list-disc  mb-4">{children}</ul>,
                //   number: ({children}) => <ol className="list-decimal  mb-4">{children}</ol>,
                // },
                // listItem: {
                //   bullet: ({children}) => <li className='ml-4'>{children}</li>,
                // }
                // ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
                // li: ({ children }) => <li className="ml-4">{children}</li>,
                // p: ({ children }) => <p className="mb-4">{children}</p>,
                // br: () => <br className="block my-2" />, // Add spacing for line breaks
              }}
            />}
        </div>
      </div>
    </div>
  )
}