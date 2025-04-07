
import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, Facebook, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoNav from "@/assets/Logo_nav.svg";
import { Link } from "react-router";
import { FaLink } from "react-icons/fa6";
import { useGlobal } from "@/hooks/cms/useGlobals";

const Navbar = () => {
  // const { data, error, isPending, isFetching } =  useGlobal();
  // console.log('global', data);
  
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

  const iconComponents = {
    instagram: <Instagram size={20}/>,
    linkedin: <Linkedin size={20}/>,
    facebook: <Facebook size={20}/>,
    twitter: <Twitter size={20}/>,
    x: <Twitter size={20}/>,
    email: <Mail size={20}/>,
    default: <FaLink size={20}/>
  }

  const getIconComponent = (name) => {
    return iconComponents[name.toLowerCase()];
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out p-4">
      <div
        className={cn(
          "max-w-dvw mx-auto px-4 sm:px-6 lg:px-8 border-2 border-[#929292] rounded-xl py-4",
          scrolled
            ? "bg-[#FFFCF9]/60 backdrop-blur-3xl shadow-sm"
            : "bg-[#FFFCF9]/80"
        )}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={LogoNav} alt="Gregory's Logo" className="h-8" />
          </div>

          <div className="flex items-center gap-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Services', '/services'],
              ['Fine Arts', '/finearts'],
              ['Contact', '/contact'],
              // ['Pricing', '/pricing'],
              // ['Testimonials', '/testimonials'],
            ].map(([title, url]) => (
              <Link
                to={url}
                className="!text-(--color-brandBlack-old) hover:!text-(--color-brandTeal-old) transition-colors duration-200 font-medium text-sm"
              >
                {title}
              </Link>
            ))}
            </div>

            {/* Book Now Button */}
            <div className="hidden md:block">
              <button className="bg-(--color-brandBlue-600) text-white px-10 py-2 rounded-full border border-[#08586A]  transition-colors duration-200 transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            {
            [{name: 'Instagram', url: 'https://instagram.com'},
            {name: 'LinkedIn', url: 'https://linkedin.com',},
            {name: 'Facebook', url: 'https://facebook.com',},
            {name: 'Twitter', url: 'https://x.com', },
            {name: 'Email', url: 'mailto:contact@example.com',},
          ].map(({name, url}) => (
            <a
              href={url}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="!text-(--color-brandBlack-old) hover:!text-(--color-brandTeal-old) transition-colors duration-200"
            >
              {getIconComponent(name) || getIconComponent('default')}
            </a>
          ))
          }
            
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
