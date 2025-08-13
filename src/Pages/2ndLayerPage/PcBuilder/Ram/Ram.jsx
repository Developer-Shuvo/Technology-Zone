import img1 from "./ram-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./ram-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./ram-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./ram-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./ram-img/5.jpg?w=800&format=webp&quality=75";

const Ram = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-10 mb-30">
      {/* Product 1 */}
      <div className="border border-gray-200 rounded shadow p-4 md:p-8 flex flex-col md:flex-row gap-6 bg-white w-full max-w-6xl mx-auto">
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img1}
            alt=""
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Corsair Vengeance RGB Pro 32GB (2x16GB) DDR5 6000MHz
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 32GB (2x16GB)</li>
            <li>Speed: 6000MHz DDR5</li>
            <li>CAS Latency: CL36</li>
            <li>Voltage: 1.35V</li>
            <li>RGB Lighting: Yes</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 18,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 20,000
          </p>
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
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 sm:h-30 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img2}
            alt=""
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            G.Skill Trident Z5 Neo 32GB (2x16GB) DDR5 6000MHz
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 32GB (2x16GB)</li>
            <li>Speed: 6000MHz DDR5</li>
            <li>CAS Latency: CL30</li>
            <li>Voltage: 1.4V</li>
            <li>RGB Lighting: Yes</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 19,200
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 21,000
          </p>
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
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img3}
            alt=""
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Kingston Fury Beast 16GB (2x8GB) DDR4 3600MHz
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 16GB (2x8GB)</li>
            <li>Speed: 3600MHz DDR4</li>
            <li>CAS Latency: CL18</li>
            <li>Voltage: 1.35V</li>
            <li>RGB Lighting: No</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 6,800</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 7,500
          </p>
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
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img4}
            alt=""
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            Crucial Ballistix 32GB (2x16GB) DDR4 3200MHz
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 32GB (2x16GB)</li>
            <li>Speed: 3200MHz DDR4</li>
            <li>CAS Latency: CL16</li>
            <li>Voltage: 1.35V</li>
            <li>RGB Lighting: Yes</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 9,900</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 11,000
          </p>
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
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img5}
            alt=""
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            TeamGroup T-Force Delta RGB 16GB (2x8GB) DDR5 5600MHz
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 16GB (2x8GB)</li>
            <li>Speed: 5600MHz DDR5</li>
            <li>CAS Latency: CL40</li>
            <li>Voltage: 1.25V</li>
            <li>RGB Lighting: Yes</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 7,500</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 8,200
          </p>
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

export default Ram;
