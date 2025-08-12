import img1 from "./graphicsCard-img/1.jpg";
import img2 from "./graphicsCard-img/2.jpg";
import img3 from "./graphicsCard-img/3.jpg";
import img4 from "./graphicsCard-img/4.jpg";
import img5 from "./graphicsCard-img/5.jpg";
const GraphicsCard = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-10 mb-30">
      {/* Graphics Card 1 */}
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
            Gigabyte GeForce RTX 4070 WINDFORCE OC 12GB
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>GPU: NVIDIA RTX 4070, 5888 CUDA cores</li>
            <li>Memory: 12 GB GDDR6X</li>
            <li>Cooling: Windforce triple-fan</li>
            <li>Supports DLSS 3 & Ray Tracing</li>
            <li>Recommended PSU: 650 W</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 86,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Graphics Card 2 */}
      <div className="border border-gray-200 rounded shadow p-4 md:p-8 flex flex-col md:flex-row gap-6 bg-white w-full max-w-6xl mx-auto">
        <div className="overflow-hidden rounded flex-shrink-0 w-full md:w-80">
          <img
            className="w-full h-auto md:h-50 rounded transform transition-transform duration-700 ease-in-out hover:scale-110"
            src={img2}
            alt=""
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-bold text-xl md:text-2xl">
            MSI GeForce RTX 4070 SUPER 12GB (WoW Edition)
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>GPU: NVIDIA RTX 4070 SUPER</li>
            <li>Memory: 12 GB GDDR6X</li>
            <li>Cores: 7168</li>
            <li>World of Warcraft themed design</li>
            <li>Cooling: Slim triple-fan</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 103,900
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 108,500
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Graphics Card 3 */}
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
            PowerColor Fighter Radeon RX 7800 XT 16 GB
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>GPU: AMD RX 7800 XT</li>
            <li>Memory: 16 GB GDDR6</li>
            <li>Stream Processors: 3840</li>
            <li>Boost Clock: up to 2475 MHz</li>
            <li>Requires 750 W PSU</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 69,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 88,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Graphics Card 4 */}
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
            MSI GeForce RTX 4070 VENTUS 3X 12 GB
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>GPU: NVIDIA RTX 4070</li>
            <li>Memory: 12 GB GDDR6X</li>
            <li>Warranty: 3 Years</li>
            <li>Triple-fan cooling</li>
            <li>Compact design</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 75,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before>w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Graphics Card 5 */}
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
            Sapphire NITRO+ AMD Radeon RX 7800 XT 16 GB
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>GPU: AMD RX 7800 XT</li>
            <li>Memory: 16 GB GDDR6</li>
            <li>Boost Clock: up to 2565 MHz</li>
            <li>Tri-X Cooling</li>
            <li>Supports 4 Displays</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 75,900
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before>w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphicsCard;
