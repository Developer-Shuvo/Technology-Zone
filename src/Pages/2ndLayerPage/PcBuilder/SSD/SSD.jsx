import img1 from "./ssd-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./ssd-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./ssd-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./ssd-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./ssd-img/5.jpg?w=800&format=webp&quality=75";

const SSD = () => {
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
            Samsung 970 EVO Plus 500GB NVMe M.2 SSD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 500GB</li>
            <li>Interface: PCIe Gen3 x4 NVMe 1.3</li>
            <li>Read Speed: Up to 3,500 MB/s</li>
            <li>Write Speed: Up to 3,200 MB/s</li>
            <li>Form Factor: M.2 2280</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 6,200</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 6,800
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
            Crucial MX500 1TB SATA III 2.5" SSD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 1TB</li>
            <li>Interface: SATA III 6Gb/s</li>
            <li>Read Speed: Up to 560 MB/s</li>
            <li>Write Speed: Up to 510 MB/s</li>
            <li>Form Factor: 2.5-inch</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 8,400</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 9,000
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
            Kingston KC3000 2TB PCIe 4.0 NVMe M.2 SSD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 2TB</li>
            <li>Interface: PCIe Gen4 x4 NVMe</li>
            <li>Read Speed: Up to 7,000 MB/s</li>
            <li>Write Speed: Up to 7,000 MB/s</li>
            <li>Form Factor: M.2 2280</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 24,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 25,800
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
            WD Blue SN570 1TB NVMe M.2 SSD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 1TB</li>
            <li>Interface: PCIe Gen3 x4 NVMe</li>
            <li>Read Speed: Up to 3,500 MB/s</li>
            <li>Write Speed: Up to 3,000 MB/s</li>
            <li>Form Factor: M.2 2280</li>
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
            Seagate FireCuda 530 4TB PCIe 4.0 NVMe M.2 SSD
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Capacity: 4TB</li>
            <li>Interface: PCIe Gen4 x4 NVMe</li>
            <li>Read Speed: Up to 7,300 MB/s</li>
            <li>Write Speed: Up to 6,900 MB/s</li>
            <li>Form Factor: M.2 2280</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 58,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 60,000
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

export default SSD;
