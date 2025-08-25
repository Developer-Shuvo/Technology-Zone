import img1 from "./powerSupply-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./powerSupply-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./powerSupply-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./powerSupply-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./powerSupply-img/5.jpg?w=800&format=webp&quality=75";

const PowerSupply = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-20 md:mt-50 lg:mt-40 mb-30">
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
            Corsair RM750x (750W, 80+ Gold)
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Wattage: 750W</li>
            <li>Efficiency: 80+ Gold Certified</li>
            <li>Fully Modular Cables</li>
            <li>Zero RPM Fan Mode</li>
            <li>10-Year Warranty</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 12,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 13,000
          </p>
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
      border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden 
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
            EVGA SuperNOVA 850 G5 (850W, 80+ Gold)
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Wattage: 850W</li>
            <li>Efficiency: 80+ Gold Certified</li>
            <li>Fully Modular</li>
            <li>Eco Mode for silent operation</li>
            <li>Japanese Capacitors</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,000
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 14,800
          </p>
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
      border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden 
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
            Seasonic Focus GX-650 (650W, 80+ Gold)
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Wattage: 650W</li>
            <li>Efficiency: 80+ Gold Certified</li>
            <li>Compact Size (140mm depth)</li>
            <li>Fully Modular Cables</li>
            <li>Silent Fan Control</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 10,800
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 11,200
          </p>
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
      border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden 
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
            ASUS ROG Strix 1000W (80+ Gold)
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Wattage: 1000W</li>
            <li>Efficiency: 80+ Gold Certified</li>
            <li>Fully Modular</li>
            <li>Axial-Tech Fan Design</li>
            <li>10-Year Warranty</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 22,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 23,000
          </p>
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
      border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden 
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
            Thermaltake Toughpower GF1 850W (80+ Gold)
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Wattage: 850W</li>
            <li>Efficiency: 80+ Gold Certified</li>
            <li>Fully Modular Flat Cables</li>
            <li>Smart Zero Fan</li>
            <li>10-Year Warranty</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 15,200
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 15,800
          </p>
          <button
            className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
      border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden 
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

export default PowerSupply;
