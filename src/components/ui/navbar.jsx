import LogoNav from "@/assets/Logo_nav.svg";

import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, Facebook, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4",
        scrolled
          ? "py-4 bg-[#FFFCF9]/90 backdrop-blur-sm shadow-sm"
          : "py-4 bg-[#FFFCF9]"
      )}
    >
      <div className="max-w-dvw mx-auto px-4 sm:px-6 lg:px-8 border-2 border-[#929292] rounded-xl py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={LogoNav} alt="Gregory's Logo" className="h-8" />
          </div>

          <div className="flex items-center gap-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-[#00A79D] hover:text-[#03746D] cursor-pointer transition-colors duration-200 font-medium text-sm"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[#00A79D] hover:text-[#03746D] cursor-pointer transition-colors duration-200 font-medium text-sm"
              >
                About Greg
              </a>
              <a
                href="#services"
                className="text-[#00A79D] hover:text-[#03746D] cursor-pointer transition-colors duration-200 font-medium text-sm"
              >
                Services
              </a>
              <a
                href="#fine-art"
                className="text-[#00A79D] hover:text-[#03746D] cursor-pointer transition-colors duration-200 font-medium text-sm"
              >
                Fine Art
              </a>
              <a
                href="#contact"
                className="text-[#00A79D] hover:text-[#03746D] cursor-pointer transition-colors duration-200 font-medium text-sm"
              >
                Contact
              </a>
            </div>

            {/* Book Now Button */}
            <div className="hidden md:block">
              <button className="bg-[#00A79D] text-white px-10 py-2 rounded-full border border-[#08586A] hover:bg-[#03746D] transition-colors duration-200 transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#0F6F84] transition-colors duration-200 cursor-pointer hover:text-[#03746D]"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#0F6F84] transition-colors duration-200 cursor-pointer hover:text-[#03746D]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#0F6F84] transition-colors duration-200 cursor-pointer hover:text-[#03746D]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#0F6F84] transition-colors duration-200 cursor-pointer hover:text-[#03746D]"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="text-[#0F6F84] transition-colors duration-200 cursor-pointer hover:text-[#03746D]"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-[#0F6F84] focus:outline-none"
              aria-label="Open mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
