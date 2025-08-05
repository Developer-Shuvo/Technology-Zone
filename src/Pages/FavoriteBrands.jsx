import React from "react";

const Companies = [
  { name: "Samsung", image: "https://logo.clearbit.com/samsung.com" },
  { name: "Sony", image: "https://logo.clearbit.com/sony.com" },
  { name: "LG", image: "https://logo.clearbit.com/lg.com" },
  { name: "Panasonic", image: "https://logo.clearbit.com/panasonic.com" },
  { name: "Philips", image: "https://logo.clearbit.com/philips.com" },
  { name: "Toshiba", image: "https://logo.clearbit.com/toshiba.com" },
  { name: "Intel", image: "https://logo.clearbit.com/intel.com" },
  { name: "AMD", image: "https://logo.clearbit.com/amd.com" },
  { name: "Nvidia", image: "https://logo.clearbit.com/nvidia.com" },
  { name: "Asus", image: "https://logo.clearbit.com/asus.com" },
  { name: "Acer", image: "https://logo.clearbit.com/acer.com" },
  { name: "Lenovo", image: "https://logo.clearbit.com/lenovo.com" },
];

const FavoriteBrands = () => {
  return (
    <div className="bg-[#F8F8E1] mt-30">
      <div className="max-w-[1400px] mx-auto">
        <div className="py-40 grid grid-cols-1 lg:grid-cols-3 text-white gap-20 px-2">
          {/* Left Side Text */}
          <div className="col-span-1 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl lg:text-4xl xl:text-5xl text-cyan-800 font-bold">
              Shop Products from Your Favorite Brands
            </h1>
            <p className="text-gray-700 mt-8">
              Shop top-quality products from your favorite brands. Find trends,
              essentials, and more in our curated collection. Start shopping
              today!
            </p>
          </div>

          {/* Right Side Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Companies.map((company, i) => (
              <a
                key={i}
                href="#"
                className="w-28 h-28 bg-[#FFDBDB] text-gray-900 font-semibold text-center flex flex-col items-center justify-center rounded-full transform transition-transform duration-500 hover:scale-110 hover:bg-[#88bacb]"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-8 h-8 mb-2 object-contain"
                />
                <span className="text-xs">{company.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteBrands;
