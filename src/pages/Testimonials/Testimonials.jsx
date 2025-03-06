import React from "react";
import Awards from "../../components/ui/Awards"; // ✅ Ensure correct import
import BookingProcess from "../../components/ui/BookingProcess"; // ✅ Ensure correct import

// Testimonials Data
const testimonials = [
  {
    name: "JENNINE DIETZ",
    review:
      "We could not have been more pleased with Greg Coman Photography. Greg and his team captured every moment of our charity event beautifully.",
    image: "/reviewers/testimonial1.jpg", // ✅ Ensure this file exists in public/reviewers/
  },
  {
    name: "GRACIANA DUQUE",
    review:
      "Greg did my professional headshots and they turned out outstanding! He made me feel comfortable and confident during the session.",
    image: "/reviewers/testimonial4.jpg",
  },
  {
    name: "ALEXIS LAKEY",
    review:
      "Greg has quickly become our family photographer. He made our backyard wedding look like a dream, capturing candid and emotional moments perfectly.",
    image: "/reviewers/testimonial3.jpg",
  },
  {
    name: "ANNA VONSTRACK",
    review:
      "Greg and Jody were the perfect photographers for our wedding day. They made sure every precious moment was preserved.",
    image: "/reviewers/testimonial2.jpg",
  },
  {
    name: "MARK ROBINSON",
    review:
      "I needed branding photos for my startup, and Greg delivered amazing shots that perfectly represent my company’s vibe!",
    image: "/reviewers/testimonial5.jpg",
  },
  {
    name: "Chris Logue",
    review:
      "Greg's maternity photoshoot experience was magical. The lighting and emotions he captured were beyond perfect!",
    image: "/reviewers/testimonial6.jpg",
  },
];

// Testimonials Component
const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-8">
          📸 Hear What Our Clients Have to Say!
        </h1>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Review */}
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {testimonial.name}
            </h2>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
            <div className="mt-3 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>

      {/* Awards Section */}
      <Awards />

      {/* Booking Process Section */}
      <BookingProcess />
    </div>
  );
};

export default Testimonials;
