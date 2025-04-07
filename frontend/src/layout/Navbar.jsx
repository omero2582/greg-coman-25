
import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, Facebook, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoNav from "@/assets/Logo_nav.svg";
import { Link } from "react-router";
import { FaLink } from "react-icons/fa6";
import { useGlobal } from "@/hooks/cms/useGlobals";
import { urlFor } from "@/sanity-cms/sanityClient";
import { SocialIcon } from "@/components/SocialIcon";

const Navbar = () => {
  const { data, error, isPending, isFetching } =  useGlobal();
  console.log('global', data);
  
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
          {data?.logo &&
          <img
            src={urlFor(data.logo)?.url() || LogoNav}
            alt="Logo for Greg Coman Photography"
            className="h-8"
          />}

          <div className="flex items-center gap-8">
            {/* Navigation Links */}
            {data?.navbar?.links &&
            <div className="hidden md:flex items-center space-x-8">
              {data.navbar.links?.map(({label, path}, i) => (
              <Link
                key={i}
                to={path}
                className="!text-(--color-brandBlack-old) hover:!text-(--color-brandTeal-old) transition-colors duration-200 font-medium text-sm"
              >
                {label}
              </Link>
              ))}
            </div>}

            {/* Book Now Button */}
            {data?.navbar?.buttonText && 
            <button className="bg-(--color-brandBlue-600) !text-white !font-[400] px-10 py-2 rounded-full border border-[#08586A]  transition-colors duration-200 transform hover:scale-105">
              {data?.navbar?.buttonText}
            </button>}
          </div>

          {/* Social Media Icons */}
          {data?.socials?.links && 
          <div className="hidden md:flex items-center space-x-4 ml-6">
            {data.socials.links?.map(({label, url}, i) => (
            <a
              key={i}
              href={label?.toLowerCase() === 'email' ? `mailto:${url}` : url}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="!text-(--color-brandBlack-old) hover:!text-(--color-brandTeal-old) transition-colors duration-200"
            >
              <SocialIcon name={label} size={20}/>
            </a>
          ))}
          </div>}

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
