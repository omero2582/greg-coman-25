import React from 'react';

const PricingPage = () => {
  return (
    <main className="max-w-6xl mx-auto p-4">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-2">PRICING</h1>
      <p className="mb-1">Simple & Transparent Pricing For Your Photography Needs</p>
      <p className="mb-4">Find The Perfect Package For Your Budget. No Hidden Fees, Just Stunning Photos</p>
      
      <h2 className="text-2xl font-semibold mb-1">Pricing Tiers</h2>
      <p className="mb-6">We offer various packages; take your pick and be amazed!</p>

      {/* Engagement Portrait Session */}
      <div className="flex flex-col md:flex-row items-stretch mb-8">
        <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
          <span>Picture</span>
        </div>
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
      </div>

      {/* Family Portrait Session Outdoor */}
      <div className="flex flex-col md:flex-row-reverse items-stretch mb-8">
        <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
          <span>Picture</span>
        </div>
        <div className="flex-1 bg-white p-6 shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-medium mb-4">Family Portrait Session Outdoor</h3>
          <p className="mb-4">Details Of Package</p>
          <button
            className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => alert('More info about Family Portrait Session')}
          >
            More Info
          </button>
        </div>
      </div>

      {/* Business Profile Portrait */}
      <div className="flex flex-col md:flex-row items-stretch mb-8">
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
      </div>

      {/* Couple Portrait Session */}
      <div className="flex flex-col md:flex-row-reverse items-stretch mb-8">
        <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
          <span>Picture</span>
        </div>
        <div className="flex-1 bg-white p-6 shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-medium mb-4">Couple Portrait Session</h3>
          <p className="mb-4">Details Of Package</p>
          <button
            className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => alert('More info about Couple Portrait Session')}
          >
            More Info
          </button>
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
