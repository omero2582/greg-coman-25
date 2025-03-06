// CarouselImages.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselImages = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((imgSrc, idx) => (
          /* 
             1) Enforce a fixed height on each slide (h-64 = 16rem).
             2) Hide any overflow to prevent scrollbars if the image is larger.
          */
          <div
            key={idx}
            className="flex items-center justify-center h-64 overflow-hidden"
          >
            <img
              src={imgSrc}
              alt={`Carousel Slide ${idx}`}
              /*
                Make the image fill its container and crop to fit.
                If you prefer letterboxing, use "object-contain" instead.
              */
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselImages;
