import React from "react";
import HeroImage from "./assets/JohnsonImage.jpg";
import LogoNav from "@/assets/Logo_nav.svg";
import MeetGreg from "./assets/MeetGreg.jpg";
import MeetGreg1 from "./assets/MeetGreg1.jpg";
import Familyjpg from "./assets/Familyjpg.jpg";
import Eventsjpg from "./assets/Eventsjpg.jpg";
import Weddingjpg from "./assets/Weddingjpg.jpg";
import Headshotjpg from "./assets/Headshotjpg.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full overflow-auto overflow-x-hidden px-4">
      {/* Hero Section */}
      <div
        className="h-dvh w-dvw flex relative justify-center items-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="text-white text-5xl text-center">
            {Array.from(
              "CAPTURE YOUR MEMORIES WITH GREG COMAN PHOTOGRAPHY!"
            ).map((char, index) => (
              <span
                key={index}
                className="relative"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)",
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="hidden md:block">
            <button className="text-white px-10 py-2 rounded-full border border-[#08586A] hover:bg-[#03746D] transition-colors duration-200 transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
      {/* Logo and other stuff */}
      <div className="py-20 w-md flex justify-center items-center flex-col space-y-4">
        <img src={LogoNav} className="h-40" />
        <div className="text-5xl font-light w-max text-center text-[#05839D]">
          CAPTURING YOUR MOMENTS
        </div>
        <div className="text-[#05839D] w-[575px]">
          <strong>
            WE PROVIDE PROFESSIONAL PHOTOGRAPHY SERVICES FOR ALL YOUR
            PHOTOGRAPHY WORTHY NEEDS -{" "}
          </strong>
          <span>
            both around YOUR LIFE, and YOUR BUSINESS. Our philosophy is quality
            over quantity, fast delivery and a personal and creative approach.
            After all, it's really about YOU.
          </span>
        </div>
      </div>
      <div className="h-auto w-dvw flex justify-center items-center py-40">
        <div className="flex bg-[#8DB5CE] w-full h-full justify-center items-center px-40 py-20 relative">
          <div className="flex flex-col space-y-4 w-1/2">
            <div className="text-5xl">HEY IT'S GREG</div>
            <div>
              My passion for photography started early, inspired by my fathers
              slideshow photos of our family vacations made possible through his
              job at Air Canada. At 17, I received my first camera - an Olympus
              QM10 - and I trekked across Europe with it.
              <br />
              With over <strong>50 years of experience</strong>, including{" "}
              <strong>10+ years professionally.</strong> I took a leap of faith
              in 2014 so start my photography business, building a modest studio
              and never looking back. I've worked as a school portrait,
              automobile, and sports photographer, collaborating with a diverse
              range of clients.
            </div>
            <div className="hidden md:block">
              <button className="text-white px-10 py-2 rounded-full border border-[#08586A] hover:bg-[#03746D] transition-colors duration-200 transform hover:scale-105">
                Get To Know Greg
              </button>
            </div>
          </div>
          <div className="flex flex-col w-2/3 relative">
            <img
              src={MeetGreg}
              alt=""
              className="absolute top-[-300px] left-1/2 transform -translate-x-1/2 h-[500px] w-[350px] object-cover rounded-xl z-10"
            />
            <img
              src={MeetGreg1}
              alt=""
              className="absolute top-[-250px] left-[650px] transform -translate-x-1/2 h-[350px] w-[350px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="py-20 w-full flex flex-col justify-center items-center space-y-8">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <span className="text-5xl font-light w-max text-center text-[#05839D]">
            CHECK OUT OUR PACKAGES!
          </span>
          <div className="w-1/2 text-center space-y-4">
            Capturing Halton Hill's heart - timeless keepsakes, vibrant stories
            and stunning portraits that celebrate community, culture, and
            connection! Let us know how you want your story to be captured
          </div>
          <button className="text-white px-10 py-2 rounded-full border border-[#08586A] hover:bg-[#03746D] transition-colors duration-200 transform hover:scale-105">
            Let's Connect
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer ease-in-out transition-all duration-200">
            <div>
              <img
                src={Headshotjpg}
                alt=""
                className="h-[400px] w-[300px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              />
            </div>
            <div>HEADSHOTS</div>
          </div>
          <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer">
            <div>
              <img
                src={Familyjpg}
                alt=""
                className="h-[400px] w-[300px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              />
            </div>
            <div>FAMILY</div>
          </div>
          <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer">
            <div>
              <img
                src={Weddingjpg}
                alt=""
                className="h-[400px] w-[300px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              />
            </div>
            <div>ENGAGEMENT & WEDDING</div>
          </div>
          <div className="flex flex-col items-center space-y-2 hover:font-bold cursor-pointer">
            <div>
              <img
                src={Eventsjpg}
                alt=""
                className="h-[400px] w-[300px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              />
            </div>
            <div>EVENTS</div>
          </div>
        </div>
        <div className="w-auto flex bg-[#8DB5CE] rounded-lg items-center justify-around px-40 py-4 space-x-20">
          <div className="flex flex-col">
            <div className="text-3xl ">WE ALSO DO:</div>
            <div>Don't see what you need? Let us know!</div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center px-12 py-1 rounded-full bg-white border border-[#1E376C] hover:cursor-pointer hover:bg-[#e7e1e1] transition-all duration-200">
              PRODUCTS
            </div>
            <div className="flex items-center px-12 py-1 rounded-full bg-white border border-[#1E376C] hover:cursor-pointer hover:bg-[#e7e1e1] transition-all duration-200">
              SPORTS
            </div>
            <div className="flex items-center px-12 py-1 rounded-full bg-white border border-[#1E376C] hover:cursor-pointer hover:bg-[#e7e1e1] transition-all duration-200">
              REAL ESTATE
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-20 w-full flex flex-col justify-center items-center space-y-8 bg-[#8DB5CE]">
        <div className="w-full flex flex-col justify-center items-center space-y-1">
          <div className="text-5xl text-white">
            LET'S MAKE IT AN EASY PROCESS
          </div>
          <div className="text-white">
            Seamless Booking, Stunning Photos - Just Show Up And Enjoy The
            Experience!
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="bg-[#77AACA] max-w-64 flex flex-col space-y-4 items-center py-12 px-8 rounded-lg shadow-2xl border border-[#1E376C]">
            <div className="text-[#1E376C]">STEP 1:</div>
            <div className="text-[#1E376C]">CHOOSE YOUR PACKAGE</div>
            <div className="text-white">
              Let's talk about what YOU are looking for! Don't see one yet?
              Contact me and let's discuss.
            </div>
          </div>
          <div className="bg-[#77AACA] max-w-64 flex flex-col space-y-4 items-center py-12 px-8 rounded-lg shadow-2xl border border-[#1E376C]">
            <div>STEP 2:</div>
            <div>BOOK THE SESSION</div>
            <div>
              Lock in a session with the booking fee and we can plan all the
              stunning photos you want to see!
            </div>
          </div>
          <div className="bg-[#77AACA] max-w-64 flex flex-col space-y-4 items-center py-12 px-8 rounded-lg shadow-2xl border border-[#1E376C]">
            <div>STEP 3:</div>
            <div>PHOTOSHOOT DAY!</div>
            <div>
              Lock in a session with the booking fee and we can plan all the
              stunning photos you want to see!
            </div>
          </div>
          <div className="bg-[#77AACA] max-w-64 flex flex-col space-y-4 items-center py-12 px-8 rounded-lg shadow-2xl border border-[#1E376C]">
            <div>STEP 4:</div>
            <div>CHOOSE YOUR PHOTOS</div>
            <div>
              Lock in a session with the booking fee and we can plan all the
              stunning photos you want to see!
            </div>
          </div>
        </div>
        <button className="text-white px-10 py-2 rounded-full border border-[#08586A] hover:bg-[#03746D] transition-colors duration-200 transform hover:scale-105">
          Book with Greg!
        </button>
      </div>
    </div>
  );
}
