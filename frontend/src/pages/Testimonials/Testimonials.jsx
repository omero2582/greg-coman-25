import React from "react";
import BookingProcess from "../../components/oldBeforeAddingHomeToCMS/BookingProcess";
import Steps from "@/components/Steps";
import Awards from "@/components/Awards";
import NavBarSizeAccountFor from "@/components/NavBarSizeAccountFor";

const testimonials = [
  {
    name: "JENNINE DIETZ",
    review:
      "We could not have been more pleased with Greg Coman Photography. Greg and his team captured every moment of our charity event beautifully.",
    image: "/reviewers/testimonial1.jpg",
  },
  {
    name: "CEL LOGARTA",
    review:
      "Greg is very easy to work with, on time, and very usable shots for formal events. On the fun side - love the way his lenses capture nature and flow, his shots are very organic.",
    image: "/reviewers/cel.jpg",
  },
  {
    name: "ALEXIS LAKEY",
    review:
      "Greg has quickly become our family photographer - just that statement makes me feel so glamorous! Greg and Beatrice fashioned our backyard wedding collection that is exhibition worthy at the Guggenheim.",
    image: "/reviewers/Alexis.jpg",
  },
  {
    name: "ALEKSANDRA NINKOVIC",
    review:
      "Greg and his partner are very accommodating and professional. They are patient and work around all your specific needs! The quality of their work is extremely good! We are looking forward to more business with them!",
    image: "/reviewers/alek.jpg",
  },
  {
    name: "ANNA VONSTRACK",
    review:
      "Greg and Jody were the perfect photographers for our wedding day. They made sure every precious moment was preserved.",
    image: "/reviewers/testimonial2.jpg",
  },
  {
    name: "GHOSPFOUNDATION",
    review:
      "We hired Greg and Jody to photograph our annual Gala in November and we are sure glad we did! They captured so many significant moments on the night of the Gala and the photos turned absolutely incredible, with many to choose from.",
    image: "/reviewers/GHOP.jpg",
  },
];

const Testimonials = () => {
  return (
    <>
    <NavBarSizeAccountFor/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Simple & Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600">
          Find the perfect package for your budget — no hidden fees, just
          stunning photos!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {testimonial.name}
            </h2>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
            <div className="mt-3 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
      <Awards/>
      <Steps />
    </div>
    
    </>
  );
};

export default Testimonials;
