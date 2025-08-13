import img1 from "./keyboard-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./keyboard-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./keyboard-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./keyboard-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./keyboard-img/5.jpg?w=800&format=webp&quality=75";

const Keyboard = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-10 mb-30">
      {/* Keyboard 1 */}
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
            Keychron K2 Wireless Mechanical Keyboard (Hot-Swappable)
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Wireless Bluetooth 5.1 & Wired USB-C</li>
            <li>Hot-Swappable Gateron Switches</li>
            <li>84-Key Compact Layout</li>
            <li>White LED Backlight</li>
            <li>Battery Life: Up to 72 hours</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 9,200</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 10,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Keyboard 2 */}
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
            Logitech G915 TKL Wireless RGB Mechanical Gaming Keyboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>LIGHTSPEED Wireless + Bluetooth</li>
            <li>Low-Profile GL Tactile Switches</li>
            <li>Tenkeyless Design</li>
            <li>RGB LIGHTSYNC Illumination</li>
            <li>Battery Life: Up to 40 hours</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 21,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 23,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Keyboard 3 */}
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
            Razer Huntsman Mini 60% Optical Gaming Keyboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Razer Linear Optical Switches</li>
            <li>60% Compact Layout</li>
            <li>PBT Double-Shot Keycaps</li>
            <li>Chroma RGB Backlighting</li>
            <li>Detachable USB-C Cable</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 8,900</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 9,800
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Keyboard 4 */}
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
            SteelSeries Apex Pro Mechanical Gaming Keyboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>OmniPoint Adjustable Mechanical Switches</li>
            <li>Full-Size Layout</li>
            <li>OLED Smart Display</li>
            <li>Per-Key RGB Illumination</li>
            <li>Aircraft-Grade Aluminum Frame</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 25,000
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 27,500
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Keyboard 5 */}
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
            Corsair K70 RGB MK.2 Mechanical Gaming Keyboard
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>CHERRY MX Red Mechanical Switches</li>
            <li>Aircraft-Grade Aluminum Frame</li>
            <li>Dedicated Media Controls</li>
            <li>Per-Key RGB Lighting</li>
            <li>Detachable Wrist Rest</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 15,800
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 17,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
