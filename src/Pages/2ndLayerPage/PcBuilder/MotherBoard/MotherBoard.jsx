
import img1 from "./motherboard-img/andrey-matveev-PFUU5SpARxw-unsplash.jpg";
import img2 from "./motherboard-img/branislav-herc-4TT21qJebpY-unsplash.jpg";
import img3 from "./motherboard-img/cartist-kfT6CFAuqe4-unsplash.jpg";
import img4 from "./motherboard-img/christian-wiediger-Htfy7TaDBgo-unsplash.jpg";
import img5 from "./motherboard-img/gamercomp-ru-phdNBU3QUrk-unsplash.jpg";

const MotherBoard = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-10 mb-30">
      {/* Product 1 */}
      <div className="border border-gray-200 rounded shadow p-4 md:p-8 flex flex-col md:flex-row gap-6 bg-white w-full max-w-6xl mx-auto">
        {/* image */}
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img1}
            alt=""
          />
        </div>

        {/* product details */}
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Asus PRIME A620M-K Micro-ATX Motherboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Chipset: AMD A620 Chipset for Ryzen 7000 / 8000 Series</li>
            <li>Socket: AM5</li>
            <li>M.2 Slot: 1x M.2 slot</li>
            <li>USB: 6x Rear, 6x Front</li>
            <li>Memory: 2x DIMM slots, Max. 96GB, DDR5</li>
          </ul>
        </div>

        {/* price */}
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 11,949
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 13,000
          </p>
          {/* button */}
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
              border border-gray-300 rounded px-2  lg:px-6 py-1 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
          >
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="border border-gray-200 rounded shadow p-4 md:p-8 flex flex-col md:flex-row gap-6 bg-white w-full max-w-6xl mx-auto">
        {/* image */}
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 sm:h-30 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img2}
            alt=""
          />
        </div>
        {/* Text */}
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Asus PRIME B760M-F Micro-ATX Motherboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Chipset: Intel B760 Chipset for Intel Core 14th & 13th Gen</li>
            <li>Socket: Intel Socket LGA1700</li>
            <li>Memory: 2x DIMM slots, Max. 96GB, DDR5</li>
            <li>Ready for Advanced AI PC</li>
            <li>Aura Sync RGB Lighting</li>
          </ul>
        </div>
        {/* Price */}
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,999
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 18,000
          </p>
          {/* button */}
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
              border border-gray-300 rounded px-2  lg:px-6 py-1 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
          >
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="border border-gray-200 rounded shadow p-4 md:p-8 flex flex-col md:flex-row gap-6 bg-white w-full max-w-6xl mx-auto">
        {/* image */}
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img3}
            alt=""
          />
        </div>
        {/* Text */}
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Asus PRIME B760M-F Micro-ATX Motherboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Chipset: Intel B760 Chipset for Intel Core 14th & 13th Gen</li>
            <li>Socket: Intel Socket LGA1700</li>
            <li>Memory: 2x DIMM slots, Max. 96GB, DDR5</li>
            <li>Ready for Advanced AI PC</li>
            <li>Aura Sync RGB Lighting</li>
          </ul>
        </div>
        {/* Price */}
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,999
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 18,000
          </p>
          {/* button */}
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
              border border-gray-300 rounded px-2  lg:px-6 py-1 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
          >
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>
      {/* Product 4 */}
      <div className="border border-gray-200 rounded shadow p-4 md:p-8 flex flex-col md:flex-row gap-6 bg-white w-full max-w-6xl mx-auto">
        {/* image */}
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img4}
            alt=""
          />
        </div>
        {/* Text */}
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Asus PRIME B760M-F Micro-ATX Motherboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Chipset: Intel B760 Chipset for Intel Core 14th & 13th Gen</li>
            <li>Socket: Intel Socket LGA1700</li>
            <li>Memory: 2x DIMM slots, Max. 96GB, DDR5</li>
            <li>Ready for Advanced AI PC</li>
            <li>Aura Sync RGB Lighting</li>
          </ul>
        </div>
        {/* Price */}
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,999
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 18,000
          </p>
          {/* button */}
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
              border border-gray-300 rounded px-2  lg:px-6 py-1 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
          >
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>
      {/* Product 5 */}
      <div className="border border-gray-200 rounded shadow p-4 md:p-8 flex flex-col md:flex-row gap-6 bg-white w-full max-w-6xl mx-auto">
        {/* image */}
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img5}
            alt=""
          />
        </div>
        {/* Text */}
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Asus PRIME B760M-F Micro-ATX Motherboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Chipset: Intel B760 Chipset for Intel Core 14th & 13th Gen</li>
            <li>Socket: Intel Socket LGA1700</li>
            <li>Memory: 2x DIMM slots, Max. 96GB, DDR5</li>
            <li>Ready for Advanced AI PC</li>
            <li>Aura Sync RGB Lighting</li>
          </ul>
        </div>
        {/* Price */}
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,999
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 18,000
          </p>
          {/* button */}
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
              border border-gray-300 rounded px-2  lg:px-6 py-1 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
          >
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotherBoard;
