import img1 from "./processor-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./processor-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./processor-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./processor-img/2.jpg?w=800&format=webp&quality=75";
import img5 from "./processor-img/4.jpg?w=800&format=webp&quality=75";

const Processor = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-20 md:mt-50 lg:mt-40 mb-30">
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
            AMD Ryzen 9 7950X3D Processor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>16 Cores / 32 Threads</li>
            <li>Base Clock: 4.2GHz, Boost Clock: up to 5.7GHz</li>
            <li>Cache: 128MB L3 + 16MB L2</li>
            <li>TDP: 120W</li>
            <li>Socket: AM5</li>
          </ul>
        </div>

        {/* price */}
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 79,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 85,000
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
            Intel Core i9-14900K Processor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>24 Cores (8P+16E) / 32 Threads</li>
            <li>P-Core: up to 6.0GHz, E-Core: up to 4.4GHz</li>
            <li>Cache: 36MB Intel Smart Cache</li>
            <li>TDP: 125W (Base), 253W (Max Turbo)</li>
            <li>Socket: LGA1700</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 73,999
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 78,000
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
            AMD Ryzen 7 7800X3D Processor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>8 Cores / 16 Threads</li>
            <li>Base Clock: 4.2GHz, Boost Clock: up to 5.0GHz</li>
            <li>Cache: 96MB L3 + 8MB L2</li>
            <li>TDP: 120W</li>
            <li>Socket: AM5</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 54,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 59,000
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
            Intel Core i7-14700K Processor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>20 Cores (8P+12E) / 28 Threads</li>
            <li>P-Core: up to 5.6GHz, E-Core: up to 4.3GHz</li>
            <li>Cache: 33MB Intel Smart Cache</li>
            <li>TDP: 125W (Base), 253W (Max Turbo)</li>
            <li>Socket: LGA1700</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 54,999
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 59,000
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
            AMD Ryzen 5 7600X Processor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>6 Cores / 12 Threads</li>
            <li>Base Clock: 4.7GHz, Boost Clock: up to 5.3GHz</li>
            <li>Cache: 32MB L3 + 6MB L2</li>
            <li>TDP: 105W</li>
            <li>Socket: AM5</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 28,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 32,000
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

export default Processor;
