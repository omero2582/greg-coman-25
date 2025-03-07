import React from "react";
import CarouselImages from "./CarouselImages"; // import your carousel component
import BookingProcess from "../../components/ui/BookingProcess"; // ✅ Ensure correct import

const PricingPage = () => {
  // Make sure these images exist in public/pricingImages/... 
  // (Replace with your actual images for each package.)
  const engagementImages = [
    "/pricingImages/engagement1.jpg",
    "/pricingImages/engagement2.jpg",
    "/pricingImages/engagement3.jpg",
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
  <h2 className="text-3xl font-bold text-gray-800 mb-4">
    Frequently Asked Questions
  </h2>
  <p className="text-gray-500 mb-8">
    We’ve compiled answers to some of our most common questions.
    If you need more info or have other questions, feel free to contact us!
  </p>

  <div className="space-y-6">
    {/* FAQ Item */}
    <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <h3 className="font-semibold text-gray-800 text-lg">
        Question 1: What should we wear to our session?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        This can vary greatly and depend on your photographer’s style, your style,
        the location, the ages of the people, etc. Rule of thumb tends to be:
        choose clothing that does not detract from faces, or overpower the image.
        Selecting 2 or 3 colours that blend well together for each person to wear
        is often recommended. Ask your professional photographer for a consultation
        based on your situation.
      </p>
    </div>

    {/* FAQ Item */}
    <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <h3 className="font-semibold text-gray-800 text-lg">
        Question 2: Can I share the photos on Social Media?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Yes, you are welcome to share the photos on your personal social media
        accounts. Please credit Greg Coman as the photographer. However, altering
        or selling the images without permission is not allowed.
      </p>
    </div>

    {/* FAQ Item */}
    <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <h3 className="font-semibold text-gray-800 text-lg">
        Question 3: How long will you keep the photos?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        We typically retain digital copies of client photos for a reasonable
        period (1 year) to ensure we can fulfill any future requests or provide
        replacements if needed. We do not provide extended archival services past
        one year, but we can recommend third-party archival services. We recommend
        backing up your digital copies of the photos in multiple locations to prevent
        loss. However, if you lose your copies, please contact us, and we will do our
        best to provide replacements, subject to availability and any applicable fees.
      </p>
    </div>

    {/* FAQ Item */}
    <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <h3 className="font-semibold text-gray-800 text-lg">
        Question 4: Will you use my photos for promotional purposes?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Unless otherwise specified in writing, I may use select images from
        our session for promotional purposes, including my website, social media,
        and marketing materials. I respect your privacy and will typically request
        your consent first.
      </p>
    </div>

    {/* FAQ Item */}
    <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <h3 className="font-semibold text-gray-800 text-lg">
        Question 5: What is the benefit of investing in a professional photographer?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        You typically get what you pay for. You will receive premium service, quality
        photo products, and the photographers’ range of experience and skills.
        True professionals keep up with their skills and education, invest thousands
        of dollars into the best professional photographic lighting and camera
        equipment, as well as fast computers.
      </p>
    </div>

    {/* FAQ Item */}
    <div className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <h3 className="font-semibold text-gray-800 text-lg">
        Question 6: Why do I need professional headshots instead of doing one myself with my phone?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Professional photographers who specialize in headshots know how to light,
        pose, style and bring out the best in you, in a way you never could with
        your phone at the end of your arm. You and your online persona deserve
        the best image of yourself!
      </p>
    </div>
  </div>
</div>

        <BookingProcess />
      </section>
    </main>
  );
};

export default PricingPage;
