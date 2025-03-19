import LogoNav from "@/assets/Logo_nav.svg";
import PPOCImage from "../../pages/Home/assets/ppoc.png";
import NPSImage from "../../pages/Home/assets/NPSlogo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#8DB5CE] text-[#1E376C] py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src={LogoNav || "/placeholder.svg"}
              alt="Greg Coman Photography"
              className="h-16"
            />
          </div>

          {/* Certification Logos */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <img
              src={PPOCImage || "/placeholder.svg"}
              alt="Photography Certification"
              className="h-12 w-12"
            />
            <img
              src={NPSImage || "/placeholder.svg"}
              alt="NPS Nikon Professional Services"
              className="h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column - About */}
          <div className="flex flex-col space-y-2">
            <a>
              <div className="hover:underline font-medium w-fit cursor-pointer text-[#1E376C]">
                Home
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                About Greg
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Testimonials
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Blog
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Workshops
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Fine Art
              </div>
            </a>
          </div>

          {/* Second Column - Services */}
          <div className="flex flex-col space-y-2">
            <a>
              <div className="hover:underline font-medium w-fit cursor-pointer text-[#1E376C]">
                Services
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Headshot
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Family
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Engagement & Wedding
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Events
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Products
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Sports
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Real Estate
              </div>
            </a>
          </div>

          {/* Third Column - Info */}
          <div className="flex flex-col space-y-2">
            <a>
              <div className="hover:underline font-medium w-fit cursor-pointer text-[#1E376C]">
                FAQ
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Contact Us
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Privacy and Policy
              </div>
            </a>
            <a>
              <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                Terms and Conditions
              </div>
            </a>
          </div>

          {/* Fourth Column - Contact Info */}
          <div className="flex flex-col space-y-2">
            <div>
              <div className="font-medium">ADDRESS:</div>
              <div>Greg Coman Photography</div>
              <div>10737 Sixth Line</div>
              <div>Georgetown, Ontario, L7G 4S6, Canada</div>
            </div>
            <div>
              <div className="font-medium">PHONE:</div>
              <div>(647) 294-2067</div>
            </div>
            <div className="flex flex-col w-fit">
              <div className="font-medium">EMAIL:</div>
              <a href="mailto:info@gregcoman.com" className="w-min">
                <div className="text-[#1E376C] hover:underline w-fit cursor-pointer font-normal">
                  info@gregcoman.com
                </div>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-2">
              <div className="border border-[#1E376C] rounded-full p-1.5">
                <Instagram size={16} />
              </div>
              <div className="border border-[#1E376C] rounded-full p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="border border-[#1E376C] rounded-full p-1.5">
                <Facebook size={16} />
              </div>
              <div className="border border-[#1E376C] rounded-full p-1.5">
                <Twitter size={16} />
              </div>
              <div className="border border-[#1E376C] rounded-full p-1.5">
                <Mail size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E376C]/30 mt-8 pt-4">
          <p className="text-sm">Disclaimer</p>
        </div>
      </div>
    </footer>
  );
}
