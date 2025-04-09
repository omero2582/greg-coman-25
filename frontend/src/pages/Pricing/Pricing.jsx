import React, { useState } from "react";
import CarouselImages from "./CarouselImages";
import BookingProcess from "../../components/oldBeforeAddingHomeToCMS/BookingProcess";
import Booking from "@/components/Booking";
import Steps from "@/components/Steps";
import FAQ from "../FAQ/FAQ";

/** 
 * A modal component that displays full service details:
 * title, subtitle, time, price, location, long description,
 * bullet points, optional image, and contact info.
 */
function InfoModal({ isOpen, onClose, service }) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Semi-transparent/blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white max-w-3xl w-full rounded-lg shadow-lg p-6 md:p-8 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-4">{service.subtitle}</p>

        {/* Row of Time, Price, Location */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* "Buttons" for time, price, location */}
          <span className="px-3 py-1 border rounded text-gray-700">
            {service.time}
          </span>
          <span className="px-3 py-1 border rounded text-gray-700">
            {service.price}
          </span>
          <span className="px-3 py-1 border rounded text-gray-700">
            {service.location}
          </span>
        </div>

        {/* Service Description */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Service Description
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Bullet Points */}
        {service.bulletPoints && service.bulletPoints.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {service.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {/* Optional Image */}
        {service.image && (
          <div className="my-6">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-md w-full md:w-1/2 mx-auto"
            />
          </div>
        )}

        {/* Contact Details */}
        {service.contact && (
          <div className="mt-6 text-gray-700">
            <h4 className="text-lg font-semibold mb-1">Contact Details</h4>
            {service.contact.phone && <p>{service.contact.phone}</p>}
            {service.contact.email && <p>{service.contact.email}</p>}
            {service.contact.address && <p>{service.contact.address}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

const PricingPage = () => {
  const [openModal, setOpenModal] = useState(null);

  /**
   * Each service object contains everything the modal needs:
   * - title, subtitle
   * - time, price, location
   * - description
   * - bulletPoints (array of strings)
   * - optional image
   * - contact details (phone, email, address)
   */
  const packageDetails = {
    engagement: {
      title: "Wedding Service",
      subtitle: "Capturing Special Moments with your Sweetheart!",
      time: "1 hr 30 min",
      price: "$375",
      location: "Location varies",
      description: `
        You are about to announce your commitment to one another. 
        This has to be shared! Spend an afternoon hand-holding, hugging, 
        and kissing your sweetheart at a beautiful country location.
        
        We’ll suggest poses and capture images that you envision. 
        We’ll catch fleeting moments, seductive glances, and cozy candids. 
        All with an artistic flair.
      `,
      bulletPoints: [
        "Shoot location flexibility",
        "Multiple poses & outfit changes",
        "Selection of digital proofs uploaded securely",
        "12 edited images included",
        "Delivery via online gallery or USB",
      ],
      image: "/pricingImages/engagment3.jpg",
      contact: {
        phone: "647-204-2067",
        email: "info@gregcoman.com",
        address: "10737 Sixth Line, Georgetown, Ontario L7G 4S6, Canada",
      },
    },
    business: {
      title: "Business Profile Portrait",
      subtitle: "Make a Positive First Impression!",
      time: "45 min",
      price: "$150",
      location: "Studio/Office location",
      description: `
        Step up your professional presence with polished headshots
        and dynamic corporate images. We’ll help you and your team
        stand out in any industry.
      `,
      bulletPoints: [
        "Professional headshots",
        "Multiple background options",
        "Digital retouching included",
      ],
      image: "/pricingImages/business1.jpg",
      contact: {
        phone: "647-204-2067",
        email: "info@gregcoman.com",
        address: "Georgetown, Ontario",
      },
    },
    family: {
      title: "Family Portrait Session",
      subtitle: "Capture Special Moments with Your Loved Ones!",
      time: "1 hr",
      price: "$300",
      location: "Location of your choice",
      description: `
        Create lasting memories in a relaxed environment! 
        Perfect for holiday cards, family milestones, or just documenting everyday joy.
      `,
      bulletPoints: [
        "Outdoor or in-home session",
        "Multiple poses & groupings",
        "Digital editing & basic retouching",
      ],
      image: "/pricingImages/family1.jpg",
      contact: {
        phone: "647-204-2067",
        email: "info@gregcoman.com",
        address: "Georgetown, Ontario",
      },
    },
    portfolio: {
      title: "Professional Portfolio Session",
      subtitle: "Next Level in Your Career",
      time: "1 hr",
      price: "$200",
      location: "Studio or On-Location",
      description: `
        Build or update your professional portfolio with high-quality images 
        that showcase your unique style and talents — whether you’re an artist, 
        model, or creative.
      `,
      bulletPoints: [
        "Multiple outfits & styling",
        "Headshots & full-body shots",
        "Retouched high-res digital files",
      ],
      image: "/pricingImages/portfolio1.jpg",
      contact: {
        phone: "647-204-2067",
        email: "info@gregcoman.com",
        address: "Georgetown, Ontario",
      },
    },
    event: {
      title: "Event Photography Session",
      subtitle: "Make Every Event Unforgettable!",
      time: "2 hr",
      price: "$400+",
      location: "Venue of your choice",
      description: `
        From corporate gatherings to private parties, we’ll capture 
        the best moments and showcase the energy of your event.
      `,
      bulletPoints: [
        "Candid & posed shots",
        "Online proofing gallery",
        "Additional hours available for extra fee",
      ],
      image: "/pricingImages/event1.jpg",
      contact: {
        phone: "647-204-2067",
        email: "info@gregcoman.com",
        address: "Georgetown, Ontario",
      },
    },
  };

  // Carousel images for each package
  const engagementImages = [
    "/pricingImages/engagment1.jpg",
    "/pricingImages/engagment2.jpg",
    "/pricingImages/engagment3.jpg",
    "/pricingImages/engagment5.jpg",
    "/pricingImages/engagment6.jpg",
    "/pricingImages/engagment7.jpg",
  ];
  const businessImages = [
    "/pricingImages/business1.jpg",
    "/pricingImages/business2.jpg",
    "/pricingImages/business3.jpg",
    "/pricingImages/business4.jpg",
    "/pricingImages/business5.jpg",
  ];
  const familyImages = [
    "/pricingImages/family1.jpg",
    "/pricingImages/family2.jpg",
    "/pricingImages/family3.jpg",
    "/pricingImages/family4.jpg",
    "/pricingImages/family5.jpg",
    "/pricingImages/family6.jpg",
  ];
  const portfolioImages = [
    "/pricingImages/portfolio1.jpg",
    "/pricingImages/portfolio2.jpg",
    "/pricingImages/portfolio3.jpg",
    "/pricingImages/portfolio4.jpg",
  ];
  const eventImages = [
    "/pricingImages/event1.jpg",
    "/pricingImages/event2.jpg",
    "/pricingImages/event3.jpg",
    "/pricingImages/event4.jpg",
    "/pricingImages/event5.jpg",
    "/pricingImages/event6.jpg",
    "/pricingImages/event7.jpg",
  ];

  // Helper to open modal for each package
  const openPackageModal = (packageKey) => {
    setOpenModal(packageKey);
  };

  // Helper to close
  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-50 to-white py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Simple & Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600">
          Find the perfect package for your budget — no hidden fees, just stunning photos!
        </p>
      </header>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto py-12 px-4 space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600">
            We offer various packages; take your pick and be amazed!
          </p>
        </div>

        {/* PACKAGE 1: Engagement */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={engagementImages} />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {packageDetails.engagement.title}
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-semibold text-gray-700">
                {packageDetails.engagement.time}
              </span>
              <span className="text-gray-700">
                {packageDetails.engagement.price}
              </span>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {packageDetails.engagement.subtitle}
            </p>
            <button
              className="self-start px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => openPackageModal("engagement")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* PACKAGE 2: Business (flipped) */}
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={businessImages} />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {packageDetails.business.title}
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-semibold text-gray-700">
                {packageDetails.business.time}
              </span>
              <span className="text-gray-700">
                {packageDetails.business.price}
              </span>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {packageDetails.business.subtitle}
            </p>
            <button
              className="self-start px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => openPackageModal("business")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* PACKAGE 3: Family */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={familyImages} />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {packageDetails.family.title}
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-semibold text-gray-700">
                {packageDetails.family.time}
              </span>
              <span className="text-gray-700">
                {packageDetails.family.price}
              </span>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {packageDetails.family.subtitle}
            </p>
            <button
              className="self-start px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => openPackageModal("family")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* PACKAGE 4: Portfolio (flipped) */}
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={portfolioImages} />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {packageDetails.portfolio.title}
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-semibold text-gray-700">
                {packageDetails.portfolio.time}
              </span>
              <span className="text-gray-700">
                {packageDetails.portfolio.price}
              </span>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {packageDetails.portfolio.subtitle}
            </p>
            <button
              className="self-start px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => openPackageModal("portfolio")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* PACKAGE 5: Event */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={eventImages} />
          </div>
          <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {packageDetails.event.title}
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-semibold text-gray-700">
                {packageDetails.event.time}
              </span>
              <span className="text-gray-700">
                {packageDetails.event.price}
              </span>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {packageDetails.event.subtitle}
            </p>
            <button
              className="self-start px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => openPackageModal("event")}
            >
              More Info
            </button>
          </div>
        </div>

      <FAQ/>

      </section>
      <Steps/>

      {/* ========== MODALS ========== */}
      <InfoModal
        isOpen={Boolean(openModal === "engagement")}
        onClose={closeModal}
        service={packageDetails.engagement}
      />
      <InfoModal
        isOpen={Boolean(openModal === "business")}
        onClose={closeModal}
        service={packageDetails.business}
      />
      <InfoModal
        isOpen={Boolean(openModal === "family")}
        onClose={closeModal}
        service={packageDetails.family}
      />
      <InfoModal
        isOpen={Boolean(openModal === "portfolio")}
        onClose={closeModal}
        service={packageDetails.portfolio}
      />
      <InfoModal
        isOpen={Boolean(openModal === "event")}
        onClose={closeModal}
        service={packageDetails.event}
      />
    </main>
  );
};

export default PricingPage;