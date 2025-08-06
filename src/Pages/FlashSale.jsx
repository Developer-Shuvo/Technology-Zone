import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/Shop/10.jpg";
import img6 from "../assets/images/Shop/11.jpg";

const FlashSale = () => {
  return (
    // Flash Sale Slide *****
    <section className="bg-[#F5F5F5] py-28 mt-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-900 font-bold">
          Flash Sale
        </h1>

        {/* Slider Background Box */}
        <div className="bg-[#749BC2] p-6 sm:p-10 lg:p-14 rounded-lg shadow-md mt-8">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col overflow-hidden rounded-xl shadow-md bg-white">
                  <img
                    src={[img1, img2, img3, img4, img5, img6][index % 5]}
                    className="h-44 sm:h-48 md:h-52 lg:h-56 w-full object-cover"
                    alt={`Product ${index + 1}`}
                  />

                  <div className="p-3 sm:p-4">
                    <h5 className="text-sm sm:text-base md:text-lg font-medium mb-2 text-left text-gray-800">
                      5 Keys to Financial Ops Excellence
                    </h5>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-base sm:text-lg font-bold text-green-600">
                        ৳ 29.99
                      </p>
                      <p className="text-sm sm:text-base text-gray-400 line-through">
                        ৳49.99
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center text-yellow-500 text-xs sm:text-sm">
                      ⭐⭐⭐⭐☆
                      <span className="ml-2 text-gray-500">(4.0)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
