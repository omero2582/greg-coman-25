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

// Awards Images
import Award1 from "./assets/Award1.png";
import Award2 from "./assets/Award2.jpg";
import Award3 from "./assets/Award3.jpg";

import { usePage } from "@/hooks/cms/usePage";
import { urlFor } from "@/sanity-cms/sanityClient";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Spinner } from "@/components/ui/Spinner";
import { PortableText } from "@portabletext/react";

export default function Home() {
  const { data, error, isPending, isFetching } =  usePage('homePage');
  console.log('homepage', data);
  
  const photos = data?.images.map(i => urlFor(i)?.url());

  function splitArrayInHalf(arr) {
    const middle = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, middle);
    const secondHalf = arr.slice(middle);
    return [firstHalf, secondHalf];
  }

  if(isPending){
    return <div className="min-h-[100vh] flex justify-center">
        <Spinner size="xl" className="text-neutral-400">
          <span className="text-[1.2rem] pt-[4px]">Loading...</span>
        </Spinner>
      </div>
  }

  return (
    <div className="flex flex-col items-center justify-center h-full overflow-auto overflow-x-hidden">
      {data?.heroSection[0] && 
      <Hero data={data.heroSection[0]}/>}
      {data?.introSection[0] && 
      <Intro data={data.introSection[0]}/>}
      {data?.aboutSection[0] && 
      <About data={data.aboutSection[0]}/>}
      
      
      {/* Packages Section */}
      <div className="py-16 w-full flex flex-col justify-center items-center space-y-8 px-4">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-(--color-brandTeal-700)">
            CHECK OUT OUR PACKAGES!
          </h2>
          <div className="max-w-2xl text-center text-gray-700">
            Capturing Halton Hill's heart - timeless keepsakes, vibrant stories
            and stunning portraits that celebrate community, culture, and
            connection! Let us know how you want your story to be captured.
          </div>
          <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105 mt-2">
            Let's Connect
          </button>
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
            <div className="text-2xl md:text-3xl text-white">
              WE ALSO DO:
            </div>
            <div className="text-white text-sm">
              Don't see what you need? Let us know!
            </div>
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

      {/* Easy Process Section */}
      <div className="py-16 w-full flex flex-col justify-center items-center space-y-8 bg-[#8DB5CE] px-4">
        <div className="w-full flex flex-col justify-center items-center space-y-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
            LET'S MAKE IT AN EASY PROCESS
          </h2>
          <div className="text-white text-center">
            Seamless Booking, Stunning Photos - Just Show Up And Enjoy The
            Experience!
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {[
            {
              name: 'CHOOSE YOUR PACKAGE',
              description: `Let's talk about what YOU are looking for! Don't see one yet?
                Contact me and let's discuss.`
            },
            {
              name: 'BOOK THE SESSION',
              description: `Lock in the session you want, pay the booking fee and we can plan
              all the stunning photos you want to see!`
            },
            {
              name: 'PHOTOSHOOT DAY',
              description: `Let me take care of the rest! Just show up and enjoy the
              experience. I will make sure your best angles are captured!`
            },
            {
              name: 'CHOOSE YOUR PHOTOS',
              description: `In about a week, view your photos through a link to Pic-Time. Now
              all you need to do is select your favorites.`
            }
          ].map(({name, description}, i) => (
            <div key={i} className="bg-[#77AACA] w-full max-w-[250px] flex flex-col space-y-4 items-center py-8 px-6 rounded-lg shadow-xl border border-[#1E376C] text-start hover:shadow-2xl transition-all duration-200 ease-in-out cursor-pointer">
            <div className="text-[#1E376C] w-full text-3xl">
              STEP {i+1}:
            </div>
            <div className="text-[#1E376C] w-full text-xl">
              {name}
            </div>
            <div className="text-white w-full">
              {description}
            </div>
          </div>
          ))
          }
        </div>

        <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105 mt-4">
          Book with Greg!
        </button>
      </div>

      {/* Photo Gallery Section */}
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

      {/* Photography Workshop Section */}
      <div className="py-16 w-full flex flex-col justify-center items-center space-y-8 bg-[#1A689A] px-4">
        <div className="w-full flex flex-col justify-center items-center space-y-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">
            WANT TO LEARN PHOTOGRAPHY?
          </h2>
          <div className="text-white text-center max-w-3xl">
            I offer a variety of workshops and classes for those interested in
            learning photography. From beginner to advanced, I can help you take
            your photography to the next level.
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 items-center justify-center">
          <img
            src={WorkshopImage || "/placeholder.svg"}
            alt="Photography Workshop"
            className="h-64 md:h-96 w-full md:w-1/2 object-cover rounded-xl shadow-2xl"
          />

          <div className="text-white w-full md:w-1/2 max-w-xl">
            <h3 className="text-xl md:text-2xl mb-4">
              Book a{" "}
              <span className="bg-[#3C80AB] px-2 py-1">
                PHOTOGRAPHY WORKSHOP
              </span>{" "}
              <br />
              Session With Me!
            </h3>
            <p className="mb-4">
              Whether it's your first time picking up a camera or you're looking
              to improve your skills, I offer a variety of workshops and classes
              for those interested in learning photography. From beginner to
              advanced, I can help you take your photography to the next level.
            </p>
            <p className="mb-6">
              Book a session with me today for tips, tricks and personalized
              lessons from a professional photographer to take your photography
              to the next level.
            </p>
            <div className="bg-[#77AACA] w-fit text-white cursor-pointer px-8 py-2 rounded-full border border-[#08586A] hover:bg-[#6b9ab7] transition-colors duration-200">
              Book with Greg!
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 w-full flex flex-col justify-center items-center bg-[#8DB5CE] px-4">
        <div className="max-w-4xl text-center text-white text-xl md:text-2xl italic mb-8 px-4">
          "We Could Not Have Been More Pleased With Greg's Work. He Made Our
          Wedding Day So Special And The Photos Are Absolutely Beautiful. We
          Will Treasure Them Forever."
        </div>
        <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105">
          Read More Reviews
        </button>
      </div>

      {/* Awards Section */}
      <div className="py-16 w-full flex flex-col justify-center items-center space-y-6 px-4">
        <div className="text-(--color-brandTeal-700) text-xl text-center">
          Proud Winner of These Awards for Three Years Straight!
        </div>
        <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4 md:gap-8">
          <img
            src={Award1 || "/placeholder.svg"}
            alt="Award 1"
            className="h-auto w-full md:w-[30%] object-contain"
          />
          <img
            src={Award2 || "/placeholder.svg"}
            alt="Award 2"
            className="h-auto w-full md:w-[30%] object-contain"
          />
          <img
            src={Award3 || "/placeholder.svg"}
            alt="Award 3"
            className="h-auto w-full md:w-[30%] object-contain"
          />
        </div>
      </div>

      {/* Book with Greg Section */}
      <div className="py-16 w-full flex flex-col justify-center items-center space-y-6 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-(--color-brandTeal-700)">
          BOOK WITH GREG TODAY!
        </h2>
        <div className="text-xl md:text-2xl text-(--color-brandTeal-700)">
          Let's talk about what YOU want!
        </div>
        <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105 mb-6">
          Book Now
        </button>
        <img
          src={Familyjpg || "/placeholder.svg"}
          alt="Family Photography"
          className="h-64 md:h-96 w-full max-w-4xl object-cover rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}

{/* Hero Section */}
function Hero({data = {}}) {
  const {image, buttonText, title} = data;
  console.log('hero', urlFor(data.image)?.url())
  
  return(
    <div
    className="h-dvh w-full flex relative justify-center items-center"
    // style={{
    //   backgroundImage: data?.heroSection[0]?.image ? `url(${urlFor(data?.heroSection[0]?.image)?.url()})` : ``,
    //   // backgroundImage: data?.heroSection[0]?.image ? `url(${urlFor(data?.heroSection[0]?.image)?.url()})` : `url(${HeroImage})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
  >
    { image && 
    <div className="z-[-1] absolute inset-0">
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
      <h1
        className="leading-tight text-white text-3xl md:text-4xl lg:text-5xl text-center max-w-3xl"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
      >
        {title}
      </h1>
      {buttonText && 
      <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105">
        {buttonText}
      </button>}
    </div>
  </div>
  )
}

{/* Logo and Tagline Section */}
function Intro({data = {}}){
  const { title, description, image } = data;

  return (
    <div className="py-16 w-full flex justify-center items-center flex-col space-y-6 px-4">
    <img
      loading="lazy"
      src={ urlFor(image)?.url() || LogoNav}
      className="h-28 md:h-40"
      alt="Greg Coman Photography Logo"
    />
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-(--color-brandTeal-700)">
      {title}
    </h2>
    {/* <div className="text-(--color-brandTeal-700) max-w-xl text-center">
      <strong>
        WE PROVIDE PROFESSIONAL PHOTOGRAPHY SERVICES FOR ALL YOUR
        PHOTOGRAPHY WORTHY NEEDS -
      </strong>
      <span>
        both around YOUR LIFE, and YOUR BUSINESS. Our philosophy is quality
        over quantity, fast delivery and a personal and creative approach.
        After all, it's really about YOU.
      </span>
    </div> */}
    {Array.isArray(description) 
      && 
      <div className='max-w-xl text-center prose-color-(--color-brandTeal-700) prose prose-md leading-normal'>
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
        <div className="flex flex-col space-y-4 w-full md:w-1/2 max-w-xl px-4 md:px-8 z-10">
          <h2 className="text-4xl md:text-5xl text-white">
            {title}
          </h2>
          {/* <div className="text-white">
            My passion for photography started early, inspired by my father's
            slideshow photos of our family vacations made possible through his
            job at Air Canada. At 17, I received my first camera - an Olympus
            QM10 - and I trekked across Europe with it.
            <br />
            <br />
            With over <strong>50 years of experience</strong>, including{" "}
            <strong>10+ years professionally.</strong> I took a leap of faith
            in 2014 to start my photography business, building a modest studio
            and never looking back. I've worked as a school portrait,
            automobile, and sports photographer, collaborating with a diverse
            range of clients.
          </div> */}
          {Array.isArray(description) && 
          <div className='space-y-2 prose prose-md prose-color-[white] leading-normal'>
            <PortableText value={description} />
          </div>
          }
          <div>
            <button className="text-white px-8 py-2 rounded-full bg-(--color-brandBlue-600) transition-colors duration-200 transform hover:scale-105">
              {buttonText}
            </button>
          </div>
        </div>
        {images && 
        <div className="hidden md:flex w-1/2 justify-center relative h-96">
          <img
            loading="lazy"
            src={urlFor(images[0])?.url() || MeetGreg }
            alt="Greg Coman"
            className="absolute h-[300px] w-[250px] object-cover rounded-xl shadow-lg"
          />
          <img
            loading="lazy"
            src={urlFor(images[1])?.url() || MeetGreg1}
            alt="Greg Coman Photography"
            className="z-10 bottom-[0px] right-[0%] absolute h-[200px] w-[200px] object-cover rounded-xl shadow-lg"
          />
        </div>
        }
      </div>
    </div>

  )
}