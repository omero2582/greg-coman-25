import React, { Children, useState } from 'react'
import { useServiceQuery } from '@/hooks/cms/index';
import validator from 'validator';
import { useParams } from 'react-router';
import { PortableText } from '@portabletext/react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { urlFor } from '@/sanity-cms/sanityClient';
import NavBarSizeAccountFor from '@/components/NavBarSizeAccountFor';
import { Spinner } from '@/components/ui/Spinner';
import Booking from '@/components/Booking';
import Steps from '@/components/Steps';

export default function ServiceDetail() {
  const serviceSlug = validator.escape(useParams().serviceSlug);

  const {data, isPending, isLoading, error} = useServiceQuery(serviceSlug);

  if(isPending){
    return <div className="min-h-[100vh] flex justify-center">
        <Spinner size="xl" className="text-neutral-400">
          <span className="text-[1.2rem] pt-[4px]">Loading...</span>
        </Spinner>
      </div>
  }

  if(error || !data){
    return <div className="min-h-[60vh] grid place-content-center">
      <span className="text-[1.6rem] pt-[4px]">
        Service Not Found
      </span>
  </div>
  }

  const { name, caption, description, descriptionImage, images, slug, packages } = data

  //bg-[#FFFCF9]
  return (
    <>
      <NavBarSizeAccountFor/>
      <div className='pb-5 max-w-[1440px] mx-auto w-full grid bg-zinc-50 justify-center'>
        {/**leading-[72px] */}
        <div className='mx-auto mt-4 mb-[12px] grid justify-items-center'>
          {name && 
          <h1 className='text-[57px] text-brandBlue-800 leading-[1] uppercase'>
            {name}
          </h1>}
          {caption && 
          <p className='text-[1.25rem] text-brandTeal-800'>{caption}</p>}
        </div>
        <MyCarousel imagesRaw={images}/>
        <About descriptionRaw={description} descriptionImageRaw={descriptionImage}/>
        <Packages packagesRaw={packages}/>
        <div className='mt-12'></div>
        <Steps/>
        <Booking/>
      </div>
    </>
  )
}


// const modules = import.meta.glob('./assets/*', { eager: true });
// const images = Object.values(modules).map(m => m.default);

function MyCarousel({imagesRaw}){
  // const images = imagesRaw.map(i => urlFor(i)?.width(550).height(310).url())
  if(!imagesRaw){
    return null
  }

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
          {/*<AspectRatio ratio={2 / 3}> */}
            <img 
              src={img}
              alt={`${i}-headshot-img`}
              className="rounded-md h-[360px] w-auto object-cover"
              loading='lazy'
            />
          {/* </AspectRatio>*/}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0"/>
      <CarouselNext className="absolute right-0"/>
    </Carousel>
    </div>
  )
}

function About({descriptionRaw, descriptionImageRaw}){

  return (
    (descriptionRaw || descriptionImageRaw) &&
    <div className='px-2 mt-18 max-w-[880px] justify-self-center justify-items-center gap-y-6 gap-x-14 grid sm:grid-cols-[auto_max-content]'>
      {descriptionRaw && 
      <div className=' self-center text-[1.25rem] leading-[1.55]'>
        <div className='!space-y-6 prose prose-xl prose-color-(--color-black) leading-normal'>
          <PortableText value={descriptionRaw} />
        </div>
      </div>}
      {descriptionImageRaw && 
      <img 
        loading='lazy'
        src={urlFor(descriptionImageRaw)?.url()} 
        className='h-[360px] sm:order-1  rounded-md'
      />}
    </div>
  )
}


function Packages({packagesRaw}){
  const [selectedTab, setSelectedTab] = useState(packagesRaw?.[0].name);

  if(!packagesRaw){
    return null
  }

  const selectedPackage = packagesRaw.find(p => p.name === selectedTab)

  return (
    <div className='mt-18 px-2 max-w-[880px] w-full justify-self-center '>
      <div>
        {packagesRaw?.map(p => (
        p?.name && 
        <button 
          key={p.name}
          onClick={() => setSelectedTab(p.name)}
          className={`tracking-wide relative text-[1.2rem] px-4 py-1  hover:bg-brandBlue-700
            ${p.name === selectedTab ? ' text-stone-100 bg-brandBlue-700' : 'text-stone-200 bg-brandBlue-800 '}
            `}
        >
          {p.name}
          {/* {p.name === selectedTab && 
          <span className={`absolute h-[3px] w-full bg-black left-0 bottom-0`}/>} */}
        </button>
        ))}
      </div>
      <div className='text-[1.15rem] '>
        <div className='mt-[10px] mb-[8px] leading-[1.3]'>
          {selectedPackage?.name && 
          <h2 className='font-[500] text-[1.4rem]'>
            {selectedPackage.name}
          </h2>}
          
          {selectedPackage?.caption && 
          <p className='text-[1.15rem] italic font-[500]'>
            {selectedPackage.caption}
          </p>}
          <div className='text-[1.13rem] grid grid-flow-col justify-start items-center'>
            {selectedPackage?.price &&
            <span className='text-[1.3rem] font-[700] text-brandBlue-800'>{selectedPackage.price}</span>}
            {selectedPackage?.duration &&
            <p>
              <span className='px-[3px]'>{`|`}</span>
              <span>{selectedPackage.duration}</span>
            </p>}
            {selectedPackage?.location &&
            <>
            <span className='px-[3px]'>{`|`}</span>
            <div className='ml-[2px] prose prose-a:no-underline prose-color-(--color-black) prose-lg leading-[1.5]'>
              <PortableText 
                value={selectedPackage.location}
                components={{
                marks: {
                  link: ({ value, children }) => (
                    <a
                      href={value?.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--color-links) hover:text-(--color-links-hover)"
                    >
                      {children}
                    </a>
                  )
                }
                }}
              />
            </div>
            </>}
          </div>
        </div>
        {selectedPackage?.description && 
        <div className='mb-[24px] max-w-full prose prose-lg prose-ul:leading-[1.55] prose-li:my-[0px]  prose-color-(--color-black) prose-p:mb-0 prose-ul:mt-0'>
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
            }}
          />
        </div>}
        {selectedPackage?.featuresTitle &&
        <div className='max-w-full prose prose-lg prose-ul:leading-[1.55] prose-li:my-[0px]  prose-color-(--color-black) prose-p:mb-0 prose-ul:mt-0'>
        <PortableText value={selectedPackage.featuresTitle} />
      </div>}
        {selectedPackage?.features &&
        <div className='max-w-full prose prose-lg prose-ul:leading-[1.55] prose-li:my-[0px]  prose-color-(--color-black) prose-p:mb-0 prose-ul:mt-0'>
        <PortableText value={selectedPackage.features} />
      </div>}
      </div>
    </div>
  )
}