import React from 'react';

const PricingPage = () => {
  return (
    <main className="max-w-6xl mx-auto p-4 space-y-8">

      {/* Page Intro */}
      <section>
        <h1 className="text-3xl font-bold mb-2">PRICING</h1>
        <p className="mb-1">Simple & Transparent Pricing For Your Photography Needs</p>
        <p className="mb-4">Find The Perfect Package For Your Budget. No Hidden Fees, Just Stunning Photos</p>
        <h2 className="text-2xl font-semibold mb-1">Pricing Tiers</h2>
        <p>We offer various packages; take your pick and be amazed!</p>
      </section>

      {/* EXAMPLE: Engagement Portrait Session */}
      <section className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Slideshow Area */}
        <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
          <span>Picture</span>
        </div>
        {/* Package Details */}
        <div className="flex-1 bg-white p-6 shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-medium mb-4">Engagement Portrait Session</h3>
          <p className="mb-4">Details Of Package</p>
          <button 
            className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => alert('More info about Engagement Portrait Session')}
          >
            More Info
          </button>
        </div>
      </section>

      {/* EXAMPLE: Business Profile Portrait */}
      <section className="flex flex-col md:flex-row-reverse items-stretch gap-4">
        <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
          <span>Picture</span>
        </div>
        <div className="flex-1 bg-white p-6 shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-medium mb-4">Business Profile Portrait</h3>
          <p className="mb-4">Details Of Package</p>
          <button
            className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => alert('More info about Business Profile Portrait')}
          >
            More Info
          </button>
        </div>
      </section>

      {/* NEW: Family Portrait Session (from new wireframe) */}
      <section className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Slideshow Area */}
        <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
          <span>Picture</span>
        </div>
        {/* Package Details */}
        <div className="flex-1 bg-white p-6 shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-medium mb-4">Family Portrait Session</h3>
          <p className="mb-4">Details Of Package</p>
          <button 
            className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => alert('More info about Family Portrait Session')}
          >
            More Info
          </button>
        </div>
      </section>

      {/* NEW: Professional Portfolio Session */}
      <section className="flex flex-col md:flex-row-reverse items-stretch gap-4">
        {/* Slideshow Area */}
        <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
          <span>Picture</span>
        </div>
        {/* Package Details */}
        <div className="flex-1 bg-white p-6 shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-medium mb-4">Professional Portfolio Session</h3>
          <p className="mb-4">Details Of Package</p>
          <button
            className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => alert('More info about Professional Portfolio Session')}
          >
            More Info
          </button>
        </div>
      </section>

      {/* NEW: FAQ Section */}
      <section className="bg-white p-6 shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-4">FAQ Section</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Question 1</h3>
            <p className="text-gray-600">Answer to question 1 goes here.</p>
          </div>
          <div>
            <h3 className="font-medium">Question 2</h3>
            <p className="text-gray-600">Answer to question 2 goes here.</p>
          </div>
          {/* Add more Q&A pairs as needed */}
        </div>
      </section>

    </main>
  );
};

export default PricingPage;
