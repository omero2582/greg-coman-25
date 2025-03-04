import React from "react";
import HeroImage from "./assets/JohnsonImage.jpg";
import LogoNav from "@/assets/Logo_nav.svg";
import MeetGreg from "./assets/MeetGreg.jpg";

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
        <div className="flex flex-col items-center">
          <div className="text-white text-5xl text-center">
            {Array.from(
              "CAPTURE YOUR MEMORIES WITH GREG COMAN PHOTOGRAPHY!"
            ).map((char, index) => (
              <span
                key={index}
                className="relative"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
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
      <div className="h-dvh w-dvw flex justify-center items-center py-50">
        <div className="flex bg-[#05839D] w-full h-full justify-center items-center px-40 relative">
          <div className="flex flex-col space-y-4 w-1/3">
            <div>HEY IT'S GREG</div>
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
          <div className="flex flex-col space-y-4 w-2/3 relative">
            <img
              src={MeetGreg}
              alt=""
              className="absolute top-[-300px] left-1/2 transform -translate-x-1/2 h-[500px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
