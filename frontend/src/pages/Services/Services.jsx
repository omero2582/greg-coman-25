import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { usePageServices } from "@/hooks/cms/usePage";
import { Spinner } from "@/components/ui/Spinner";
import { PortableText } from "@portabletext/react";
import { useNavigate } from "react-router";
import { urlFor } from "@/sanity-cms/sanityClient";

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const serviceRefs = useRef({});
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const { data, error, isPending, isFetching } = usePageServices();
  const navigate = useNavigate();

  console.log(data);

  if(isPending){
    return <div className="min-h-[100vh] flex justify-center">
        <Spinner size="xl" className="text-neutral-400">
          <span className="text-[1.2rem] pt-[4px]">Loading...</span>
        </Spinner>
      </div>
  }

  if(error || !data){
    return <div className="min-h-[60vh] grid place-content-center">
      <span className="text-[1.6rem] pt-[4px]">
        Services Not Found
      </span>
  </div>
  }
  

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


  const { title, caption, services} = data;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#8DB5CE] pt-40 py-16 md:py-24 md:pt-40">  
        <div className="container mx-auto px-4 text-center">
          {title &&
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {title}
          </h1>}
          {caption && 
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            {caption}
          </p>}
        </div>
      </div>
      <div className="flex-grow">
        {services?.map((service) => (
          <div
            id={service._id}
            key={service._id}
            className={`transition-all duration-500 overflow-hidden ${
              expandedService === service._id
                ? "py-16 bg-[#F5F9FC]"
                : "border-b border-gray-200"
            }`}
            ref={(el) => (serviceRefs.current[service._id] = el)}
          >
            <div className="container mx-auto px-4">
              <div
                className={`relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out cursor-pointer ${
                  expandedService === service._id
                    ? "mb-8"
                    : hoveredService === service._id
                    ? "py-64 my-4"
                    : "py-8 my-0"
                }`}
                onClick={() => toggleService(service._id)}
                onMouseEnter={() => handleMouseEnter(service._id)}
                onMouseLeave={handleMouseLeave}
              >
                {expandedService !== service._id && (
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                      hoveredService === service._id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
                    {service?.mainImage &&
                    <img
                      src={urlFor(service.mainImage)?.url()}
                      alt={service.name}
                      className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
                        hoveredService === service._id
                          ? "scale-110"
                          : "scale-100"
                      }`}
                      loading="lazy"
                    />}
                  </div>
                )}

                <div className="flex items-center relative z-20 px-4">
                  {service?.name &&
                  <h2
                    className={`uppercase text-2xl md:text-3xl flex-grow transition-all duration-500 ease-in-out ${
                      hoveredService === service._id &&
                      expandedService !== service._id
                        ? "text-white font-medium transform translate-x-2"
                        : "text-(--color-brandTeal-700)"
                    }`}
                  >
                    {service.name}
                  </h2>}

                  <div className="transition-all duration-500 ease-in-out">
                    {expandedService === service._id ? (
                      <ChevronDown className="text-(--color-brandTeal-700) transition-transform duration-500" />
                    ) : (
                      <ChevronRight
                        className={`transition-all duration-500 ease-in-out ${
                          hoveredService === service._id
                            ? "text-white transform translate-x-2"
                            : "text-(--color-brandTeal-700)"
                        }`}
                      />
                    )}
                  </div>
                </div>
              </div>

              {expandedService === service._id && (
                <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeIn">
                  <div className="space-y-6">
                    {service?.captionOverview &&
                    <p className="text-gray-700 mb-6 animate-slideUp">
                      {service.captionOverview}
                    </p>}

                    <div className="space-y-6">
                      {service.packages?.length > 0 ? (
                        service.packages.map((pkg, index) => (
                          <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg animate-slideUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="flex justify-between items-center mb-4">
                              {pkg?.name &&
                              <h3 className="text-xl font-medium text-(--color-brandTeal-700)">
                                {pkg.name}
                              </h3>}
                              {pkg?.price &&
                              <span className="text-xl font-bold text-[#1A689A]">
                                {pkg.price}
                              </span>}
                            </div>
                            {pkg?.features &&
                            <div className='!space-y-2 prose prose-color-(--color-black) !leading-[1.5] marker:text-(--color-brandTeal-700) prose-ul:pl-4 prose-li:pl-0'>
                              <PortableText value={pkg.features} />
                            </div>}
                            <button
                              className="mt-4 w-full py-2 bg-(--color-brandBlue-600) text-white rounded-full transition-all duration-300 transform hover:scale-[1.02]"
                              onClick={() =>
                                navigate(`/services/${service?.slug?.current}`)
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
                            navigate(`/services/${service?.slug?.current}`)
                          }
                        >
                          Learn More
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="order-first md:order-last animate-fadeIn">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      {service?.mainImage &&
                      <img
                        src={urlFor(service.mainImage)?.url()}
                        alt={service.name}
                        className="w-full h-64 md:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                        loading="lazy"
                      />}
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
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            READY TO BOOK YOUR SESSION?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and schedule your
            session. We're looking forward to capturing your special moments!
          </p>
          <button 
            onClick= {() => navigate(`/contact`)}
            className="px-8 py-3 bg-white text-(--color-brandTeal-700) rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium"
          >
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
