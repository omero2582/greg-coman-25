import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

// Portraits Image
import HeadshotImage from "@/pages/Home/assets/Headshotjpg.jpg";

// Family Image
import FamilyImage from "@/pages/Home/assets/Familyjpg.jpg";

// Wedding Image
import WeddingImage from "@/pages/Home/assets/Weddingjpg.jpg";

// Events Image
import EventsImage from "@/pages/Home/assets/Eventsjpg.jpg";

// Real Estate Image
import RealEstateImage from "./assets/RealEstateImage.jpg";

//Sports Image
import SportsImage from "./assets/SportsImage.jpg";

// Workshop Image
import WorkshopImage from "./assets/WorkshopImage.jpg";

const services = [
  {
    id: "portraits",
    title: "PORTRAITS",
    description:
      "Professional portraits for individuals and corporate teams. Perfect for LinkedIn, company websites, and professional profiles.",
    packages: [
      {
        name: "Business Profile Package",
        price: "$150.00",
        features: [
          "In Studio",
          "Your choice of backdrop colour (white, gray, black, blue, green)",
          "An ideal location for casual or formal poses in a relaxed setting",
          "Open, airy, bright studio with a private entrance and ample parking",
          "3 edited high-resolution digital images included with the package",
        ],
      },
      {
        name: "Couple Portrait Sessions - In Studio",
        price: "$250.00",
        features: [
          "Your choice of backdrop colour (white, gray, black, blue, green)",
          "An ideal location for casual or formal poses in a relaxed setting",
          "Open, airy, bright studio with a private entrance and ample parking",
          "Multiple poses",
          "6 edited web-resolution digital images included with the package",
        ],
      },
      {
        name: "Couple Portrait Session - Outdoor Location",
        price: "$250.00",
        features: [
          "Beautiful country location options",
          "6 edited web-resolution digital images included with the package",
          "Popular in Spring, Summer, and Fall (Fall colours)",
          "Multiple Poses",
          "Travel included (up to 50km)",
        ],
      },
    ],
    image: HeadshotImage,
    linkTo: "/services/portraits",
  },
  {
    id: "family",
    title: "FAMILY PORTRAITS",
    description:
      "Capture precious moments with your loved ones. Indoor studio sessions or outdoor natural settings available.",
    packages: [
      {
        name: "Family Portrait Session - In Studio",
        price: "$300.00",
        features: [
          "Photo Shoot approximately 1 hour",
          "An ideal location for casual or formal poses in a relaxed setting",
          "Open, airy, bright studio with a private entrance and ample parking",
          "Multiple poses",
        ],
      },
      {
        name: "Family Portrait Session - Outdoor Location",
        price: "$300.00",
        features: [
          "Photo Shoot approximately 1 hour",
          "Beautiful country location options",
          "Popular in Spring, Summer, and Fall (Fall colours)",
          "6 edited web-resolution digital images included with the package",
          "Additional time (30-minute increments) may be booked to accommodate larger groups or additional poses $150 / 30 minute",
        ],
      },
    ],
    image: FamilyImage,
    linkTo: "/services/family",
  },
  {
    id: "wedding",
    title: "ENGAGEMENT & WEDDING",
    description:
      "Comprehensive wedding photography packages to document your special day from preparation to reception.",
    packages: [
      {
        name: "Engagement Session - Outdoor Location",
        price: "$325.00",
        features: [
          "Shoot location flexibility.",
          "beautiful country locations (I can suggest some of my favourites)",
          "All Season photography",
          "Multiple poses including Client suggestions",
          "A selection of Digital Proofs securely uploaded to you",
        ],
      },
      {
        name: "Diamond Wedding Package",
        price: "$3,500.00",
        features: [
          "Bride's House and Groom's House",
          "Formal Photography of the Bride & Groom",
          "Family and Wedding Party Photography - extended coverage",
          "cocktail reception candids",
          "Reception Highlights - extended coverage",
        ],
      },
      {
        name: "Gold Wedding Package",
        price: "$3,000.00",
        features: [
          "Bride's House & Groom's House",
          "Formal Photography of the Bride and Groom",
          "Family and Wedding Party Photography - full coverage",
          "Cocktail party candids",
          "Reception Highlights - full coverage",
          "Two Photographers",
        ],
      },
      {
        name: "Silver Wedding Package",
        price: "$2,500.00",
        features: [
          "Bride's House",
          "Formal Photography of the Bride & Groom",
          "Family and Wedding Party Photography",
          "Reception Highlights",
          "Two Photographers",
          "7 hours of Photography",
        ],
      },
    ],
    image: WeddingImage,
    linkTo: "/services/wedding",
  },
  {
    id: "events",
    title: "EVENTS",
    description:
      "Professional event photography for corporate functions, parties, celebrations, and special occasions.",
    packages: [],
    image: EventsImage,
    linkTo: "/services/events",
  },
  {
    id: "sports",
    title: "SPORTS",
    description:
      "Dynamic sports photography for teams, individuals, tournaments, and athletic events.",
    packages: [],
    image: SportsImage,
    linkTo: "/services/sports",
  },
  {
    id: "realestate",
    title: "REAL ESTATE",
    description:
      "Professional real estate photography to showcase properties at their best for listings and marketing.",
    packages: [],
    image: RealEstateImage,
    linkTo: "/services/realestate",
  },
  {
    id: "workshops",
    title: "WORKSHOPS",
    description:
      "Learn photography skills and techniques from a professional photographer. Workshops for all skill levels.",
    packages: [],
    image: WorkshopImage,
    linkTo: "/services/workshops",
  },
];

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const serviceRefs = useRef({});

  const toggleService = (serviceId) => {
    if (expandedService === serviceId) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceId);
      // Scroll to the service section
      document.getElementById(serviceId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMouseEnter = (serviceId) => {
    setHoveredService(serviceId);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before removing the hover state
    timeoutRef.current = setTimeout(() => {
      setHoveredService(null);
      setIsAnimating(false);
    }, 300);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#8DB5CE] pt-40 py-16 md:py-24 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              OUR SERVICES
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
              Professional photography services for all your needs. From
              personal portraits to commercial projects, we deliver high-quality
              images that tell your story.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        {services.map((service) => (
          <div
            id={service.id}
            key={service.id}
            className={`transition-all duration-500 overflow-hidden ${
              expandedService === service.id
                ? "py-16 bg-[#F5F9FC]"
                : "border-b border-gray-200"
            }`}
            ref={(el) => (serviceRefs.current[service.id] = el)}
          >
            <div className="container mx-auto px-4">
              <div
                className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out cursor-pointer ${
                  expandedService === service.id
                    ? "mb-8"
                    : hoveredService === service.id
                    ? "py-64 my-4"
                    : "py-8 my-0"
                }`}
                onClick={() => toggleService(service.id)}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
              >
                {expandedService !== service.id && (
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                      hoveredService === service.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
                        hoveredService === service.id
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    />
                  </div>
                )}

                <div className="flex items-center relative z-20 px-4">
                  <h2
                    className={`text-2xl md:text-3xl font-light flex-grow transition-all duration-500 ease-in-out ${
                      hoveredService === service.id &&
                      expandedService !== service.id
                        ? "text-white font-medium transform translate-x-2"
                        : "text-(--color-brandTeal-700)"
                    }`}
                  >
                    {service.title}
                  </h2>

                  <div className="transition-all duration-500 ease-in-out">
                    {expandedService === service.id ? (
                      <ChevronDown className="text-(--color-brandTeal-700) transition-transform duration-500" />
                    ) : (
                      <ChevronRight
                        className={`transition-all duration-500 ease-in-out ${
                          hoveredService === service.id
                            ? "text-white transform translate-x-2"
                            : "text-(--color-brandTeal-700)"
                        }`}
                      />
                    )}
                  </div>
                </div>
              </div>

              {expandedService === service.id && (
                <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeIn">
                  <div className="space-y-6">
                    <p className="text-gray-700 mb-6 animate-slideUp">
                      {service.description}
                    </p>

                    <div className="space-y-6">
                      {service.packages.length > 0 ? (
                        service.packages.map((pkg, index) => (
                          <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg animate-slideUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-xl font-medium text-(--color-brandTeal-700)">
                                {pkg.name}
                              </h3>
                              <span className="text-xl font-bold text-[#1A689A]">
                                {pkg.price}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-(--color-brandTeal-700) mr-2">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <button
                              className="mt-6 w-full py-2 bg-(--color-brandBlue-600) text-white rounded-full transition-all duration-300 transform hover:scale-[1.02]"
                              onClick={() =>
                                (window.location.href = service.linkTo)
                              }
                            >
                              Learn More
                            </button>
                          </div>
                        ))
                      ) : (
                        <button
                          className="mt-6 w-max py-2 px-10 bg-(--color-brandBlue-600) text-white rounded-full transition-all duration-300 transform hover:scale-[1.02]"
                          onClick={() =>
                            (window.location.href = service.linkTo)
                          }
                        >
                          Learn More
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="order-first md:order-last animate-fadeIn">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-64 md:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="bg-[#8DB5CE] py-16 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            READY TO BOOK YOUR SESSION?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule your
            session. We're looking forward to capturing your special moments!
          </p>
          <button className="px-8 py-3 bg-white text-(--color-brandTeal-700) rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium">
            Contact Greg
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// import { useServicesAllQuery } from '@/hooks/cms/index'
// import React from 'react'
// import { Link } from 'react-router';

// export default function Services() {

//   const {data, isPending, isLoading, error} = useServicesAllQuery();

//   if(isPending){
//     return <div>Loading..</div>
//   }

//   if(error || !data){
//     return <div>Service Not Found</div>
//   }

//   return (
//     <div className='mt-24'>
//       <h1>Services</h1>
//       <div className='grid'>{data.map(s => (
//         <Link to={`/services/${s.slug.current}`}>
//           {s.name}
//         </Link>
//       ))}</div>
//     </div>
//   )
// }
