import React from "react";

const Offers = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-sky-300 w-full">
      <section className="pt-16 pb-16">
        <div className=" mx-auto max-w-[1400px] w-full px-4 sm:px-6 md:px-10 relative flex flex-col-reverse  lg:flex-row justify-around items-center gap-12 lg:gap-20 rounded-xl shadow-lg overflow-hidden mt-6 mb-20">
          {/* Dotted Grid Decoration */}
          <div className="absolute left-4 bottom-4 w-[156px] h-[110px] grid grid-cols-4 gap-3 opacity-70">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-[#328b55] rounded-full"
              ></div>
            ))}
          </div>

          {/* Image */}
          <img
            className="w-[500px] max-w-[600px] h-auto object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
            src="https://i.postimg.cc/dVPkqkVK/245861-P4-HNZU-388.jpg"
            alt="Exclusive Offer"
          />

          {/* Offer Content */}
          <div className="w-full max-w-[589px] px-4 sm:px-0">
            <h2 className="text-[#2c1e5e] text-[40px] sm:text-[36px] md:text-[56px] mt-6 font-bold font-['Roboto_Slab'] text-center lg:text-left leading-tight drop-shadow-sm">
              Exclusive offer
            </h2>

            <p className="text-[#0e102a] text-[16px] sm:text-[18px] md:text-[22px] font-medium font-['Poppins'] leading-8 mt-4 text-center lg:text-left opacity-90">
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy
              savings of up to{" "}
              <span className="font-bold text-[#55246f]">40% off</span> on our
              latest New Arrivals
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-6 my-10 font-['Poppins']">
              {[
                { label: "Days", value: "06" },
                { label: "Hours", value: "18" },
                { label: "Min", value: "48" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] text-center py-3 md:py-4 bg-white rounded-md shadow-[0px_7px_30px_0px_rgba(0,0,0,0.08)] hover:shadow-[0px_10px_35px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <span className="block text-[#224f34] text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
                    {item.value}
                  </span>
                  <span className="block text-[#224f34] text-xs sm:text-sm md:text-base font-medium opacity-80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Buy Now Button */}
            <div className="text-center lg:text-left">
              <button className="px-8 sm:px-10 md:px-16 py-3 sm:py-4 md:py-5 bg-[#224f34] rounded-md shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_40px_0px_rgba(0,0,0,0.12)] text-white text-base sm:text-lg md:text-xl font-semibold font-['Poppins'] uppercase tracking-wide hover:scale-105 transition-all duration-300">
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
