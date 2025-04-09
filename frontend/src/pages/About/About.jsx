import NavBarSizeAccountFor from '@/components/NavBarSizeAccountFor';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Spinner } from '@/components/ui/Spinner';
import { usePhotographerFirstQuery } from '@/hooks/cms'
import { urlFor } from '@/sanity-cms/sanityClient';
import { PortableText } from '@portabletext/react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react'

export default function About() {
  
  const {data, isPending, isLoading, error} = usePhotographerFirstQuery();

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
        Photographer Not Found
      </span>
  </div>
  }


  console.log(data)

  const { 
    name, slug, summary, about, about2, about3, about4, awards, contact,  
    imagesMain, images,
  } = data;
  

  return (
    <>
      <NavBarSizeAccountFor/>
      <div className='pb-5 px-[10px] max-w-[1440px] mx-auto w-full grid justify-items-center bg-zinc-50 justify-center'>
        <Story name={name} about={about} imagesMain={imagesMain} images={images}/>
        {awards && <Awards awards={awards}/>}
        {about2 && <About2 about2={about2}/>}
        {about3 && <About3 about3={about3} />}
        {about4 && <About4 about4={about4}/>}
      </div>
    </>
  )
}

function Story({name, about, imagesMain, images}){
  return(
    <div className='max-w-[900px]'>
      <div className='mx-auto mt-9 mb-[16px] grid justify-items-center'>
        {about?.title &&
        <h1 className='text-[57px] text-brandBlue-800 leading-[1]'>
           {about.title}
        </h1>}
      </div>
      <div className=''>
        {images && 
        <div className='xs:float-left pr-6 xs:pb-0 pb-4 grid justify-center'>
          <MyCarousel imagesRaw={images}/>
        </div>}
        {about?.description && 
        <div className='max-w-full prose prose-xl prose-color-(--color-black) leading-normal'>
          <PortableText value={about.description} />
        </div>}
      </div>
    </div>
  )
}

function MyCarousel({imagesRaw}){
  // const images = imagesRaw.map(i => urlFor(i)?.width(550).height(310).url())
  const images = imagesRaw.map(i => urlFor(i)?.url())

  return (
    <div className='grid justify-start'>
      <Carousel className="relative" orientation="vertical" opts={{loop: true, align: 'start'}} plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
      <CarouselContent className='-ml-2 sm:max-h-[760px] max-h-[380px]' >
        {images.map((img, i) => (
          <CarouselItem  key={i} className="pl-2 sm:basis-1/2">
          {/*<AspectRatio ratio={2 / 3}> */}
            <img
              src={img}
              className="rounded-md h-[360px] w-auto object-cover"
              loading='lazy'
            />
          {/* </AspectRatio>*/}
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && 
      <>
        <CarouselPrevious className="absolute top-0 opacity-30 hover:opacity-100"/>
        <CarouselNext className="absolute bottom-0 opacity-30 hover:opacity-100"/>
      </>
      }
    </Carousel>
    </div>
  )
}

function Awards({awards}) {
  console.log(awards)
  // const { name, images, awardDate, placement, presenter } = awards[0];
  return (
    <div className='my-6 flex flex-wrap justify-center'>
      {awards.sort((a, b) => new Date(b) - new Date(a))
        .map((a, i) => (
          <img
            key={a.name || i}
            src={urlFor(a.images[0]).url()}
            className="rounded-md h-[160px] w-auto object-cover"
            loading='lazy'
          />
      ))}
    </div>
  )
}

function About2({ about2 }){
  const { title, caption, description, images} = about2
  return(
    <div className='mb-15 max-w-[1000px]'>
      <div className='mx-auto mt-4 mb-[16px] grid justify-items-center'>
        {title && 
        <h1 className='mt-6 text-center text-[57px] text-brandBlue-800 leading-[1]'>
          {title}
        </h1>}
        {caption && 
        <p className='text-[1.40rem] text-brandTeal-800'>
          {caption}
        </p>}
      </div>
      <div className=''>
        {images?.[0] &&
        <div className='sm:float-right pl-6 sm:mb-1 mb-5 grid justify-center'>
          <img
            src={urlFor(images[0]).url()}
            className=" rounded-md max-w-[400px] max-h-[360px] object-cover"
            loading='lazy'
          />
        </div>}
        {description &&
        <div className=' max-w-full  prose prose-xl prose-color-(--color-black) leading-normal'>
          <PortableText value={description} />
        </div>}
      </div>
    </div>
  )
}

function About3({about3}){
  const { images, description, title } = about3;

  return (
    <div className='max-w-[900px] w-full grid gap-x-6 sm:grid-flow-col sm:grid-cols-[auto_1fr] '>
      {images?.[0] &&
      <img
        src={urlFor(images[0]).url()}
        className=" justify-self-center rounded-md max-h-[400px] max-w-[360px] w-auto object-cover"
        loading='lazy'
      />}
      <div className=''>
        {title &&
        <h2 className='sm:mt-0 mt-8 text-brandBlue-800 mb-4 text-[2.5rem] text-center'>
          {title}
        </h2>}
        {description && 
        <div className='max-w-full  prose prose-xl prose-color-(--color-black) leading-normal'>
          <PortableText value={description} />
        </div>}
      </div>
    </div>
  )
}

function About4({about4}){
  const { images, title } = about4;

  return (
    <div className='mt-[50px]'>
      {title &&
      <h2 className='text-brandBlue-800 mb-2 text-[3.4rem] text-center'>
        {title}
      </h2>}
      {images &&
      <div className=' flex gap-2 flex-wrap justify-center'>
        {images.map((img, i) => (
          <img
            key={i}
            src={urlFor(img).url()}
            className="rounded-sm h-[260px] w-auto object-cover"
            loading='lazy'
          />
        ))}
      </div>}
    </div>
  )
}