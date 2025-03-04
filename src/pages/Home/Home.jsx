import React from "react";
import Navbar from "@/components/ui/navbar";
import HeroImage from "./assets/JohnsonImage.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full overflow-auto px-4">
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
            {Array.from("CAPTURE YOUR MEMORIES WITH GREG COMAN PHOTOGRAPHY!").map((char, index) => (
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
      <div className="h-dvh w-dvw flex">heu</div>
    </div>
  );
}
