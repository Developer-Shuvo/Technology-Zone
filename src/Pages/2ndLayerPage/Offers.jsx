import React from "react";

const Offers = () => {
  return (
    <div>
      <section className="pt-8">
        <div className="bg-[#C2EFD4] mx-auto w-[1400px] relative flex justify-around items-center">
          {/* Dotted Grid Decoration */}
          <div className="absolute left-10 bottom-0 w-[156px] h-[110px] grid grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-[#328b55] rounded-full"
              ></div>
            ))}
          </div>

          {/* Image */}
          <img src="https://iili.io/3Bvpo4R.png" alt="Exclusive Offer" />

          {/* Offer Content */}
          <div className="w-[589px] h-[447px] rounded-[3px]">
            <h2 className="text-[#224f34] text-[46px] font-bold font-['Roboto_Slab']">
              Exclusive offer
            </h2>
            <p className="w-[589px] text-[#224f34] text-[22px] font-medium font-['Poppins'] leading-9">
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy
              savings of up to 40% off on our latest New Arrivals
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-9 my-10 font-['Poppins']">
              <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]">
                <span className="block text-[#224f34] text-[32px] font-semibold">
                  06
                </span>
                <span className="block text-[#224f34] text-base font-medium">
                  Days
                </span>
              </div>
              <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]">
                <span className="block text-[#224f34] text-[32px] font-semibold">
                  18
                </span>
                <span className="block text-[#224f34] text-base font-medium">
                  Hours
                </span>
              </div>
              <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]">
                <span className="block text-[#224f34] text-[32px] font-semibold">
                  48
                </span>
                <span className="block text-[#224f34] text-base font-medium">
                  Min
                </span>
              </div>
            </div>

            {/* Buy Now Button */}
            <button className="px-16 py-5 bg-[#224f34] rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-white text-xl font-medium font-['Poppins'] uppercase">
              BUY NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
