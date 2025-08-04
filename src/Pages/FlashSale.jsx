import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import banner1 from "../assets/images/banner-image/banner-1.jpg";

const FlashSale = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="mx-auto max-w-[1400px] px-10">
        {/*  */}
        {/* Slider Background Box */}
        <div className="bg-cyan-800 p-14 rounded-lg shadow-md">
          {" "}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,

              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },

              768: { slidesPerView: 2 },

              1024: { slidesPerView: 3 },
            }}
          >
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col overflow-hidden rounded shadow-md bg-white p-2">
                  <img src={banner1} className="h-56 w-full object-cover" />

                  <div className="p-4">
                    <h5 className="font-medium mb-2 text-left">
                      5 Keys to Financial Ops Excellence
                    </h5>
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-lg font-bold text-green-600">
                        ৳ 29.99
                      </p>

                      <p className="text-gray-400 line-through">৳49.99</p>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center text-yellow-500 text-sm">
                      ⭐⭐⭐⭐☆
                      <span className="ml-2 text-gray-500">(4.0)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="pt-8 text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          sunt obcaecati harum inventore aperiam.
        </p>
      </div>
    </section>
  );
};

export default FlashSale;
