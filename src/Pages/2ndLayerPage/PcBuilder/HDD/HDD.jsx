import img1 from "./hdd-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./hdd-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./hdd-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./hdd-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./hdd-img/5.jpg?w=800&format=webp&quality=75";

const HDD = () => {
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
            Seagate BarraCuda 2TB 7200RPM 3.5" HDD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 2TB</li>
            <li>Interface: SATA III 6Gb/s</li>
            <li>Speed: 7200 RPM</li>
            <li>Cache: 256MB</li>
            <li>Form Factor: 3.5-inch</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 5,200</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 5,800
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
            Western Digital Blue 4TB 5400RPM 3.5" HDD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 4TB</li>
            <li>Interface: SATA III 6Gb/s</li>
            <li>Speed: 5400 RPM</li>
            <li>Cache: 256MB</li>
            <li>Form Factor: 3.5-inch</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 8,900</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 9,500
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
            Toshiba X300 Performance 6TB 7200RPM 3.5" HDD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 6TB</li>
            <li>Interface: SATA III 6Gb/s</li>
            <li>Speed: 7200 RPM</li>
            <li>Cache: 256MB</li>
            <li>Form Factor: 3.5-inch</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 15,200
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
            WD Black 8TB Performance 7200RPM 3.5" HDD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 8TB</li>
            <li>Interface: SATA III 6Gb/s</li>
            <li>Speed: 7200 RPM</li>
            <li>Cache: 256MB</li>
            <li>Form Factor: 3.5-inch</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 19,800
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 20,500
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
            Seagate IronWolf NAS 10TB 7200RPM 3.5" HDD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 10TB</li>
            <li>Interface: SATA III 6Gb/s</li>
            <li>Speed: 7200 RPM</li>
            <li>Cache: 256MB</li>
            <li>Form Factor: 3.5-inch</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 28,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 29,800
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

export default HDD;
