// Want to learn photography image
import WorkshopImage from "./assets/WorkshopImage.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import HeroImage from "./assets/JohnsonImage.jpg";
import LogoNav from "@/assets/Logo_nav.svg";
import MeetGreg from "./assets/MeetGreg.jpg";
import MeetGreg1 from "./assets/MeetGreg1.jpg";
import Familyjpg from "./assets/Familyjpg.jpg";
import Eventsjpg from "./assets/Eventsjpg.jpg";
import Weddingjpg from "./assets/Weddingjpg.jpg";
import Headshotjpg from "./assets/Headshotjpg.jpg";



import { usePage } from "@/hooks/cms/usePage";
import { urlFor } from "@/sanity-cms/sanityClient";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Spinner } from "@/components/ui/Spinner";
import { PortableText } from "@portabletext/react";
import Steps from "@/components/Steps";
import Booking from "@/components/Booking";
import Awards from "@/components/Awards";

function splitArrayInHalf(arr) {
  const middle = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, middle);
  const secondHalf = arr.slice(middle);
  return [firstHalf, secondHalf];
}


export default function Home() {
  const { data, error, isPending, isFetching } =  usePage('homePage');
  console.log('homepage', data);


  if(isPending){
    return <div className="min-h-[100vh] flex justify-center">
        <Spinner size="xl" className="text-neutral-400">
          <span className="text-[1.2rem] pt-[4px]">Loading...</span>
        </Spinner>
      </div>
  }

  return (
    <div className="flex flex-col items-center justify-center h-full overflow-auto overflow-x-hidden">
      {data?.heroSection?.[0] && 
      <Hero data={data.heroSection[0]}/>}
      {data?.introSection?.[0] && 
      <Intro data={data.introSection[0]}/>}
      {data?.aboutSection?.[0] && 
      <About data={data.aboutSection[0]}/>}

      {data?.servicesSection?.[0] && 
      <Services data={data.servicesSection[0]}/>}

      <Steps/>

      {data?.images && 
      <Gallery data={data.images}/>}

      {data?.aboutSection2?.[0] && 
      <About2 data={data.aboutSection2[0]}/>}

      {data?.testimonialSection?.[0] && 
      <Testimonials data={data.testimonialSection[0]}/>}

      {/**Global - Awards */}
      <Awards/>
      <Booking/>

     

      
    </div>
  );
}

{/* Hero Section */}
function Hero({data = {}}) {
  const {image, buttonText, title} = data;
  console.log('hero', urlFor(data.image)?.url())
  
  return(
    <div
    className="bg-slate-400 h-dvh w-full flex relative justify-center items-center"
  >
    {image && 
    <div className="absolute inset-0">
      <LazyLoadImage
        placeholderSrc={urlFor(image)?.width(50).height(50).quality(10).url()}
        src={urlFor(image)?.url()}
        className="w-full h-full object-cover"
        wrapperClassName="w-full h-full"
        effect="blur"
        />
    </div>
    // <img 
    //   className="z-[-1] absolute object-cover inset-0 h-full w-full" 
    //   src={urlFor(data?.heroSection[0]?.image)?.url()}
    // />
    }
    <div className="flex flex-col items-center space-y-6 px-4">
      {title &&
      <h1
        className="z-1 leading-tight text-white text-3xl md:text-4xl lg:text-5xl text-center max-w-3xl"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
      >
        {title}
      </h1>}
      {buttonText && 
      <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105">
        {buttonText}
      </button>}
    </div>
  </div>
  )
}


function Intro({data = {}}){
  const { title, description, image } = data;

  return (
    <div className="py-16 w-full flex justify-center items-center flex-col space-y-6 px-4">
      {image &&
      <img
        loading="lazy"
        src={ urlFor(image)?.url() || LogoNav}
        className="h-28 md:h-40"
        alt="Greg Coman Photography Logo"
      />}
      {title && 
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-(--color-brandTeal-700)">
        {title}
      </h2>}
      {description && 
      <div className='max-w-xl text-center prose-color-(--color-brandTeal-700) prose leading-normal'>
        <PortableText value={description} />
      </div>
      }
  </div>

  )  
}

{/* Hey It's Greg Section */}
function About ({data = {}}) {
  const {title, description, buttonText, images} = data;

  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="flex flex-col md:flex-row bg-[#8DB5CE] w-full justify-center items-center px-4 md:px-8 lg:px-20 py-16 relative">
        <div className="grid space-y-4 w-full md:w-1/2 max-w-xl px-4 md:px-8 z-10">
          {title &&
          <h2 className="text-4xl md:text-5xl text-white">
            {title}
          </h2>}
          {description && 
          <div className='!space-y-2 prose prose-color-[white] leading-normal'>
            <PortableText value={description} />
          </div>}
          {buttonText &&
          <button className="justify-self-start text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105">
            {buttonText}
          </button>}
        </div>
        {images && 
        <div className="hidden md:flex w-1/2 justify-center relative h-96">
          {images[0] &&
          <img
            loading="lazy"
            src={urlFor(images[0])?.url() || MeetGreg }
            alt="Greg Coman"
            className="absolute h-[300px] w-[250px] object-cover rounded-xl shadow-lg"
          />}
          {images[1] && 
          <img
            loading="lazy"
            src={urlFor(images[1])?.url() || MeetGreg1}
            alt="Greg Coman Photography"
            className="z-10 bottom-[0px] right-[0%] absolute h-[200px] w-[200px] object-cover rounded-xl shadow-lg"
          />}
        </div>
        }
      </div>
    </div>

  )
}

function Services ({data = {}}) {
  const {title, title2, description, description2, buttonText} = data;

  return (
    <div className="py-16 w-full flex flex-col justify-center items-center space-y-8 px-4">
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      {title && 
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-(--color-brandTeal-700)">
        {title}
      </h2>}
      {description && 
      <div className='max-w-2xl text-center prose-color-(--color-gray-700) !space-y-2 prose leading-normal'>
        <PortableText value={description} />
      </div>}
      {buttonText && 
      <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105 mt-2">
        {buttonText}
      </button>}
    </div>

    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer ease-in-out transition-all duration-200">
        <div>
          <img
            src={Headshotjpg || "/placeholder.svg"}
            alt="Headshots"
            className="h-[300px] w-[225px] md:h-[350px] md:w-[250px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          />
        </div>
        <div className="uppercase text-(--color-brandTeal-700) font-medium">
          HEADSHOTS
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer">
        <div>
          <img
            src={Familyjpg || "/placeholder.svg"}
            alt="Family"
            className="h-[300px] w-[225px] md:h-[350px] md:w-[250px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          />
        </div>
        <div className="uppercase text-(--color-brandTeal-700) font-medium">FAMILY</div>
      </div>
      <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer">
        <div>
          <img
            src={Weddingjpg || "/placeholder.svg"}
            alt="Engagement & Wedding"
            className="h-[300px] w-[225px] md:h-[350px] md:w-[250px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          />
        </div>
        <div className="uppercase text-(--color-brandTeal-700) font-medium">
          ENGAGEMENT & WEDDING
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer">
        <div>
          <img
            src={Eventsjpg || "/placeholder.svg"}
            alt="Events"
            className="h-[300px] w-[225px] md:h-[350px] md:w-[250px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          />
        </div>
        <div className="uppercase text-(--color-brandTeal-700) font-medium">EVENTS</div>
      </div>
    </div>

    <div className="w-full max-w-5xl flex flex-col md:flex-row bg-[#8DB5CE] rounded-lg items-center justify-between px-6 md:px-10 py-4 mt-8">
      <div className="flex flex-col mb-4 md:mb-0 text-center md:text-left">
        {title2 && 
        <p className="text-2xl md:text-3xl text-white">
          {title2}
        </p>}
        {description2 && 
        <div className='prose-color-[white] prose-sm !space-y-2 prose leading-normal'>
          <PortableText value={description2} />
        </div>}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="flex items-center px-6 py-1 rounded-full bg-white border border-[#1E376C] hover:cursor-pointer hover:bg-[#e7e1e1] transition-all duration-200">
          PRODUCTS
        </div>
        <div className="flex items-center px-6 py-1 rounded-full bg-white border border-[#1E376C] hover:cursor-pointer hover:bg-[#e7e1e1] transition-all duration-200">
          SPORTS
        </div>
        <div className="flex items-center px-6 py-1 rounded-full bg-white border border-[#1E376C] hover:cursor-pointer hover:bg-[#e7e1e1] transition-all duration-200">
          REAL ESTATE
        </div>
      </div>
    </div>
  </div>
  )
}





function Gallery ({data = []}) {
  
  const photos = data?.map(i => urlFor(i)?.url());
  return (
    <>
    {photos?.length > 0 && 
      <div className="py-16 w-full flex flex-col space-y-8 justify-center items-center">
        {splitArrayInHalf(photos).map((half, i) => (
        <Carousel
          plugins={[
            Autoplay({
              delay: i < 1 ? 2000 : 1500,
            }),
          ]}
          className="w-full max-w-7xl px-4"
        >
          <CarouselContent className="flex gap-4">
            {half.map((photo, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center"
              >
                <img
                  loading="lazy"
                  src={photo || "/placeholder.svg"}
                  className="h-64 md:h-80 w-full object-cover rounded-lg"
                  alt={`Gallery images ${i < 1 ? 'First' : 'Second'} Half`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      ))}
        
      </div>}
    </>
  )
}


{/* Photography Workshop Section */}
function About2 ({data ={}}) {
  const { title, title2, description, description2, images, buttonText } = data;

  return (
    <div className="py-16 w-full flex flex-col justify-center items-center space-y-8 bg-[#1A689A] px-4">
    <div className="w-full flex flex-col justify-center items-center space-y-2">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
        {title}
      </h2>
      {description && 
      <div className='max-w-3xl prose-color-[white] text-center !space-y-2 prose leading-normal'>
        <PortableText value={description} />
      </div>}
    </div>

    <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 items-center justify-center">
      {images?.[0] &&
      <img
        loading="lazy"
        src={urlFor(images[0])?.url()}
        alt="Photography Workshop"
        className="h-64 md:h-96 w-full md:w-1/2 object-cover rounded-xl shadow-2xl"
      />}

      <div className="text-white w-full md:w-1/2 max-w-xl">
        {/* <h3 className="text-xl md:text-2xl mb-4">
          Book a{" "}
          <span className="bg-[#3C80AB] px-2 py-1">
            PHOTOGRAPHY WORKSHOP
          </span>{" "}
          <br />
          Session With Me!
        </h3> */}
        {title2 && 
        <h3 className='mb-[15px] !space-y-[-33px] prose prose-xl md:prose-2xl prose-color-[white] md:!leading-[1.35]'>
          <PortableText value={title2} />
        </h3>}
        {description2 && 
        <div className='!space-y-2 prose prose-color-[white] leading-normal'>
          <PortableText value={description2} />
        </div>}
        {buttonText &&
        <div className="mt-6 bg-[#77AACA] w-fit text-white cursor-pointer px-8 py-2 rounded-full border border-[#08586A] hover:bg-[#6b9ab7] transition-colors duration-200">
          {buttonText}
        </div>}
      </div>
    </div>
  </div>
  )
}


function Testimonials ({data = {}}){
  const { title, buttonText } = data;
  return (
    <div className="py-16 w-full flex flex-col justify-center items-center bg-[#8DB5CE] px-4">
      {title && 
      <div className='!space-y-2 prose prose-color-[white] !leading-[1.34] max-w-4xl text-center prose-xl md:prose-2xl italic mb-8 px-4'>
        <PortableText value={title} />
      </div>}
      {buttonText && 
      <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105">
        {buttonText}
      </button>}
    </div>
  )
}
