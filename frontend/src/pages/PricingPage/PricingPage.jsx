import React from "react";
import CarouselImages from "./CarouselImages"; // import your carousel component

const PricingPage = () => {
  // Make sure these images exist in public/pricingImages/... 
  // (Replace with your actual images for each package.)
  const engagementImages = [
    "/pricingImages/engagement1.jpg",
    "/pricingImages/engagement2.jpg",
    "/pricingImages/engagement3.jpg",
  ];
  const businessImages = [
    "/pricingImages/engagement1.jpg",
    "/pricingImages/engagement1.jpg",
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
    "/pricingImages/engagement1.jpg",
    "/pricingImages/engagement1.jpg",
  ];
  const eventImages = [
    "/pricingImages/engagement1.jpg",
    "/pricingImages/engagement1.jpg",
    "/pricingImages/engagement1.jpg",
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/*
        ========== HERO / HEADER SECTION ==========
        A top banner with a subtle background gradient and text center-aligned.
      */}
      <header className="bg-gradient-to-r from-blue-50 to-white py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Simple & Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600">
          Find the perfect package for your budget — no hidden fees, just stunning photos!
        </p>
      </header>

      {/*
        ========== MAIN CONTENT AREA ==========
        Give it a max-width container, some top/bottom padding, and spacing between sections.
      */}
      <section className="max-w-6xl mx-auto py-12 px-4 space-y-12">
        {/* Sub-heading */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">Pricing Tiers</h2>
          <p className="text-gray-600">
            We offer various packages; take your pick and be amazed!
          </p>
        </div>

        {/* Package 1: Engagement */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Left column: Slideshow/Images */}
          <div className="md:w-1/2">
            <CarouselImages images={engagementImages} />
          </div>
          {/* Right column: Details */}
          <div
            className="
              md:w-1/2 bg-white p-6 md:p-8
              rounded-xl shadow-lg hover:shadow-xl transition-shadow
              flex flex-col justify-center
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Engagement Portrait Session
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Perfect for couples who want to capture their engagement memories
              in a fun and personal way. Let us celebrate this new chapter of
              your life with beautiful portraits that reflect your love story.
            </p>
            <button
              className="
                self-start px-6 py-2 bg-blue-600 text-white
                rounded-full hover:bg-blue-700 transition-colors
              "
              onClick={() => alert("More info about Engagement Portrait Session")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* Package 2: Business (flipped) */}
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
          {/* Right column: Slideshow/Images */}
          <div className="md:w-1/2">
            <CarouselImages images={businessImages} />
          </div>
          {/* Left column: Details */}
          <div
            className="
              md:w-1/2 bg-white p-6 md:p-8
              rounded-xl shadow-lg hover:shadow-xl transition-shadow
              flex flex-col justify-center
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Business Profile Portrait
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Step up your professional presence with polished headshots
              and dynamic corporate images. We’ll help you and your team
              stand out in any industry.
            </p>
            <button
              className="
                self-start px-6 py-2 bg-blue-600 text-white
                rounded-full hover:bg-blue-700 transition-colors
              "
              onClick={() => alert("More info about Business Profile Portrait")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* Package 3: Family */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={familyImages} />
          </div>
          <div
            className="
              md:w-1/2 bg-white p-6 md:p-8
              rounded-xl shadow-lg hover:shadow-xl transition-shadow
              flex flex-col justify-center
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Family Portrait Session
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Capture special moments with your loved ones in a relaxed
              environment. Perfect for holiday cards, family milestones,
              or just documenting the everyday joy of family life.
            </p>
            <button
              className="
                self-start px-6 py-2 bg-blue-600 text-white
                rounded-full hover:bg-blue-700 transition-colors
              "
              onClick={() => alert("More info about Family Portrait Session")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* Package 4: Portfolio (flipped) */}
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={portfolioImages} />
          </div>
          <div
            className="
              md:w-1/2 bg-white p-6 md:p-8
              rounded-xl shadow-lg hover:shadow-xl transition-shadow
              flex flex-col justify-center
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Professional Portfolio Session
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Build or update your professional portfolio with high-quality
              images that showcase your unique style and talents — whether
              you’re an artist, model, or creative.
            </p>
            <button
              className="
                self-start px-6 py-2 bg-blue-600 text-white
                rounded-full hover:bg-blue-700 transition-colors
              "
              onClick={() => alert("More info about Professional Portfolio Session")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* Package 5: Event */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="md:w-1/2">
            <CarouselImages images={eventImages} />
          </div>
          <div
            className="
              md:w-1/2 bg-white p-6 md:p-8
              rounded-xl shadow-lg hover:shadow-xl transition-shadow
              flex flex-col justify-center
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Event Photography Session
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Make every event unforgettable! From corporate gatherings to
              private parties, we’ll capture the best moments and showcase
              the energy of your event.
            </p>
            <button
              className="
                self-start px-6 py-2 bg-blue-600 text-white
                rounded-full hover:bg-blue-700 transition-colors
              "
              onClick={() => alert("More info about Event Photography")}
            >
              More Info
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Question 1</h3>
              <p className="text-gray-600">Answer to question 1 goes here.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Question 2</h3>
              <p className="text-gray-600">Answer to question 2 goes here.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
