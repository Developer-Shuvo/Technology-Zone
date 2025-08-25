import img1 from "./mouse-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./mouse-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./mouse-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./mouse-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./mouse-img/5.jpg?w=800&format=webp&quality=75";

const Mouse = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-20 md:mt-50 lg:mt-40 mb-30">
      {/* Mouse 1 */}
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
            Logitech G Pro X Superlight Wireless Gaming Mouse
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>LIGHTSPEED Wireless Technology</li>
            <li>Hero 25K Sensor</li>
            <li>63g Ultra-Lightweight Design</li>
            <li>5 Programmable Buttons</li>
            <li>Battery Life: Up to 70 hours</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 15,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Mouse 2 */}
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
            Razer DeathAdder V3 Pro Wireless Gaming Mouse
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Focus Pro 30K Optical Sensor</li>
            <li>63g Ultra-Lightweight</li>
            <li>Optical Mouse Switches Gen-3</li>
            <li>5 Programmable Buttons</li>
            <li>Battery Life: Up to 90 hours</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,000
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 15,500
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Mouse 3 */}
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
            Glorious Model O Wireless Gaming Mouse
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>67g Honeycomb Shell Design</li>
            <li>BAMF Sensor up to 19K DPI</li>
            <li>Low Latency Wireless</li>
            <li>RGB Lighting</li>
            <li>Battery Life: Up to 71 hours</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 9,500</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 10,500
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Mouse 4 */}
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
            SteelSeries Aerox 3 Wireless Gaming Mouse
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Ultra-Light 66g Design</li>
            <li>TrueMove Air Sensor</li>
            <li>Water-Resistant Design</li>
            <li>Dual Wireless (2.4GHz & Bluetooth)</li>
            <li>Battery Life: Up to 200 hours</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 8,800</p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Mouse 5 */}
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
            Corsair Dark Core RGB Pro Wireless Gaming Mouse
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Custom PixArt PAW3392 Sensor</li>
            <li>18,000 DPI with 1 DPI Steps</li>
            <li>Wireless + Wired USB-C</li>
            <li>9 Programmable Buttons</li>
            <li>Battery Life: Up to 50 hours</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 11,200
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mouse;
