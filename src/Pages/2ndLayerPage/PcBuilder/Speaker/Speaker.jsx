import img1 from "./headphone-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./headphone-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./headphone-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./headphone-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./headphone-img/5.jpg?w=800&format=webp&quality=75";
const Speaker = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-20 md:mt-50 lg:mt-40 mb-30">
      {/* Headphone 1 */}
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
            Sony WH-1000XM5 Wireless Noise-Cancelling Headphones
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Industry-Leading Noise Cancellation</li>
            <li>Up to 30 Hours Battery Life</li>
            <li>Touch Controls & Voice Assistant Support</li>
            <li>Bluetooth 5.2 with Multipoint Connectivity</li>
            <li>Adaptive Sound Control</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 39,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 42,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Headphone 2 */}
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
            Bose QuietComfort 45 Wireless Headphones
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Acoustic Noise Cancelling Technology</li>
            <li>Comfortable Over-Ear Design</li>
            <li>Bluetooth 5.1 & Wired Mode</li>
            <li>Up to 24 Hours Battery Life</li>
            <li>Aware Mode for Ambient Sound</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 33,800
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 36,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Headphone 3 */}
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
            Sennheiser HD 560S Audiophile Headphones
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Open-Back Design for Natural Sound</li>
            <li>50mm Dynamic Drivers</li>
            <li>Detachable 3m Cable</li>
            <li>Lightweight & Comfortable Build</li>
            <li>Exceptional Soundstage</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 28,200
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 30,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Headphone 4 */}
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
            Audio-Technica ATH-M50x Studio Monitor Headphones
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>40mm Drivers with Exceptional Clarity</li>
            <li>Closed-Back Over-Ear Design</li>
            <li>Detachable Cables Included</li>
            <li>Swiveling Ear Cups for Portability</li>
            <li>Renowned Studio Sound Quality</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 16,900
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 18,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>

      {/* Headphone 5 */}
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
            HyperX Cloud II Wireless Gaming Headset
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>53mm Drivers for Immersive Audio</li>
            <li>Detachable Noise-Cancelling Mic</li>
            <li>2.4GHz Wireless with 20m Range</li>
            <li>Up to 30 Hours Battery Life</li>
            <li>Signature HyperX Comfort</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 14,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 16,000
          </p>
          <button className="mt-4 relative inline-block text-gray-600 font-semibold text-sm lg:text-lg border border-gray-300 rounded px-2 lg:px-6 py-1 overflow-hidden transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] hover:before:w-full hover:text-black z-10 before:z-0">
            <span className="relative z-10">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
