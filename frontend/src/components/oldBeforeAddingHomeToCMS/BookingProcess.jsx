import React from "react";
import { FaCamera, FaCalendarCheck, FaImages, FaGift } from "react-icons/fa";

const bookingSteps = [
  {
    title: "Choose Your Package",
    description:
      "Explore our photography packages and select the one that best suits your needs. From portraits to full event coverage, we have something for everyone.",
    icon: <FaGift className="text-yellow-400 text-4xl" />,
    image: "/path-to-package-selection.jpg",
  },
  {
    title: "Book the Session",
    description:
      "Lock in your preferred date and time for the photoshoot. We ensure a smooth scheduling process with flexible slots.",
    icon: <FaCalendarCheck className="text-yellow-400 text-4xl" />,
    image: "/path-to-booking-calendar.jpg",
  },
  {
    title: "Enjoy the Photoshoot",
    description:
      "Relax and enjoy a professional photography experience. We guide you through poses and capture natural, breathtaking moments.",
    icon: <FaCamera className="text-yellow-400 text-4xl" />,
    image: "/path-to-photoshoot-session.jpg",
  },
  {
    title: "Choose Your Photos",
    description:
      "Review your edited images and pick your favorites. Get high-quality digital or print copies delivered to you.",
    icon: <FaImages className="text-yellow-400 text-4xl" />,
    image: "/path-to-photo-selection.jpg",
  },
];

const BookingProcess = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white-800 mb-4 bg-transparent">
          Simple & Transparent Pricing
        </h2>
        <p className="text-lg text-gray-300">
          Find the perfect package for your budget — no hidden fees, just
          stunning photos!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bookingSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col items-center text-center p-6"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600">{step.title}</h3>
            <p className="text-gray-700 mt-2 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg text-md shadow-md transition-all transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingProcess;
