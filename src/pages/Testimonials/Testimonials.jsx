import React from "react";

const testimonials = [
  {
    name: "JENNINE DIETZ",
    review:
      "We could not have been more pleased with Greg Coman Photography. Greg and a colleague attended our Field Day event and did a fantastic job...",
    image: "/path-to-image1.jpg",
  },
  {
    name: "GRACIANA DUQUE",
    review:
      "Greg did my professional headshots and let me tell you they turned out outstanding! Greg made me feel very comfortable...",
    image: "/path-to-image2.jpg",
  },
  {
    name: "ALEXIS LAKEY",
    review:
      "Greg has quickly become our family photographer - just that statement makes me feel so glamorous...",
    image: "/path-to-image3.jpg",
  },
  {
    name: "ANNA VONSTRACK",
    review:
      "Greg and Jody were the perfect photographers to have capturing our wedding day...",
    image: "/path-to-image4.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full border-2 border-gray-300 mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            {testimonial.name}
          </h2>
          <p className="text-gray-600 mt-2 text-center">{testimonial.review}</p>
          <div className="mt-3 text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
