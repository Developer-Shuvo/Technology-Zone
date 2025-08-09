import { useState, useEffect } from "react";

import banner5 from "../assets/images/banner-image/banner-5.jpg?w=800&format=webp&quality=75";
import banner6 from "../assets/images/banner-image/banner-6.jpg?w=800&format=webp&quality=75";
import banner7 from "../assets/images/banner-image/banner-7.jpg?w=800&format=webp&quality=75";
import banner8 from "../assets/images/banner-image/banner-8.jpg?w=800&format=webp&quality=75";
import banner9 from "../assets/images/banner-image/banner-9.jpg?w=800&format=webp&quality=75";
import banner10 from "../assets/images/banner-image/banner-10.jpg?w=800&format=webp&quality=75";
import banner11 from "../assets/images/banner-image/banner-11.jpg?w=800&format=webp&quality=75";
import banner12 from "../assets/images/banner-image/banner-12.jpg?w=800&format=webp&quality=75";
import banner13 from "../assets/images/banner-image/banner-13.jpg?w=800&format=webp&quality=75";
import banner14 from "../assets/images/banner-image/banner-14.jpg?w=800&format=webp&quality=75";
import banner15 from "../assets/images/banner-image/banner-15.jpg?w=800&format=webp&quality=75";

const Banner = () => {
  // Just put all your middle slider images here
  const middleImages = [
    banner6,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
    banner15,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % middleImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [middleImages.length]);

  return (
    <section className="max-w-[1300px] mx-auto py-20 px-4 flex items-center justify-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Left Image */}
        <div className="col-span-1 md:col-span-1 h-[320px]">
          <img
            src={banner5}
            alt="Banner Left"
            className="w-[300px] lg:w-full xl:w-full h-full object-cover rounded-lg shadow-lg 
              transition-all duration-300 ease-in-out 
              transform hover:scale-110 hover:-rotate-2 
              hover:shadow-2xl hover:shadow-purple-500"
          />
        </div>

        {/* Middle Auto Slider */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 h-[320px] relative overflow-hidden rounded-lg shadow-lg">
          <div
            key={currentIndex}
            className="w-full h-full transition-transform duration-700 ease-in-out"
            style={{
              animation: "slideIn 0.7s ease-in-out",
            }}
          >
            <img
              src={middleImages[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              className="w-[300px] lg:w-full xl:w-full h-full object-cover 
                transform transition-transform duration-700 ease-in-out
                hover:scale-125 hover:rotate-0
                hover:shadow-2xl hover:shadow-cyan-800"
            />
          </div>

          {/* Slide Animation */}
          <style jsx>{`
            @keyframes slideIn {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0%);
              }
            }
          `}</style>
        </div>

        {/* Right Image */}
        <div className="col-span-1 md:col-span-1 h-[320px]">
          <img
            src={banner7}
            alt="Banner Right"
            className="w-[300px] lg:w-full xl:w-full h-full object-cover rounded-lg shadow-lg 
              transition-all duration-300 ease-in-out 
              transform hover:scale-110 hover:rotate-2 
              hover:shadow-2xl hover:shadow-[#113F67]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
