import img1 from "./monitor-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./monitor-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./monitor-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./monitor-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./monitor-img/5.jpg?w=800&format=webp&quality=75";

const Monitor = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-20 md:mt-50 lg:mt-40 mb-30">
      {/* Monitor 1 */}
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
            ASUS ROG Swift PG32UQX 32" 4K HDR Gaming Monitor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Display: 32-inch 4K UHD (3840×2160)</li>
            <li>Refresh Rate: 144Hz</li>
            <li>Panel Type: IPS with HDR1400</li>
            <li>G-Sync Ultimate Support</li>
            <li>Response Time: 4ms (GtG)</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 289,000
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Monitor 2 */}
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
            LG UltraGear 27GP950-B 27" 4K Nano IPS Gaming Monitor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Display: 27-inch 4K UHD Nano IPS</li>
            <li>Refresh Rate: 144Hz (OC 160Hz)</li>
            <li>HDR600 with 98% DCI-P3</li>
            <li>NVIDIA G-Sync Compatible</li>
            <li>Response Time: 1ms (GtG)</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 115,000
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 122,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Monitor 3 */}
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
            Samsung Odyssey Neo G9 49" QLED Gaming Monitor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Display: 49-inch Dual QHD (5120×1440)</li>
            <li>Mini-LED HDR2000</li>
            <li>Refresh Rate: 240Hz</li>
            <li>1000R Curvature</li>
            <li>Response Time: 1ms (GtG)</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 220,000
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 245,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Monitor 4 */}
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
            Dell Alienware AW3423DW 34" QD-OLED Gaming Monitor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Display: 34-inch WQHD (3440×1440)</li>
            <li>QD-OLED with HDR1000</li>
            <li>Refresh Rate: 175Hz</li>
            <li>NVIDIA G-Sync Ultimate</li>
            <li>Response Time: 0.1ms</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 165,000
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">—</p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Monitor 5 */}
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
            Gigabyte M32U 32" 4K Gaming Monitor
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Display: 32-inch 4K UHD (3840×2160)</li>
            <li>Refresh Rate: 144Hz</li>
            <li>Panel Type: IPS with HDR400</li>
            <li>FreeSync Premium Pro</li>
            <li>Response Time: 1ms (MPRT)</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 85,000
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

export default Monitor;
