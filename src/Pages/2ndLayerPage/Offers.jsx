import React from "react";

const Offers = () => {
  return (
    <div>
      <section className="pt-8">
        <div className="bg-[#C2EFD4] mx-auto max-w-[1400px] w-full px-4 sm:px-6 md:px-10 relative flex flex-col-reverse lg:flex-row justify-around items-center gap-8">
          {/* Dotted Grid Decoration */}
          <div className="absolute left-2 bottom-0 w-[156px] h-[110px] grid grid-cols-4 px-6  lg:grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-[#328b55] rounded-full"
              ></div>
            ))}
          </div>

          {/* Image */}
          <img
            className=" w-full max-w-[600px] h-auto object-cover"
            src="https://i.postimg.cc/dVPkqkVK/245861-P4-HNZU-388.jpg"
            alt="Exclusive Offer"
          />

          {/* Offer Content */}
          <div className="w-full max-w-[589px] px-4 sm:px-0">
            <h2 className="text-[#224f34] text-[30px] sm:text-[36px] md:text-[46px] mt-6 font-bold font-['Roboto_Slab'] text-center lg:text-left leading-tight">
              Exclusive offer
            </h2>

            <p className="text-[#224f34] text-[16px] sm:text-[18px] md:text-[22px] font-medium font-['Poppins'] leading-8 mt-4 text-center lg:text-left">
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy
              savings of up to 40% off on our latest New Arrivals
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center  lg:justify-start flex-wrap gap-6 my-10 font-['Poppins']">
              {[
                { label: "Days", value: "06" },
                { label: "Hours", value: "18" },
                { label: "Min", value: "48" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] text-center py-3 md:py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]"
                >
                  <span className="block text-[#224f34] text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
                    {item.value}
                  </span>
                  <span className="block text-[#224f34] text-xs sm:text-sm md:text-base font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Buy Now Button */}
            <div className="text-center  lg:text-left">
              <button className="px-8 sm:px-10 md:px-16 py-3 sm:py-4 md:py-5 bg-[#224f34] rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-white text-base sm:text-lg md:text-xl font-medium font-['Poppins'] uppercase">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
