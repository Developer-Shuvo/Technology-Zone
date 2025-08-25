import img1 from "./coolerFan-img/1.jpg?w=800&format=webp&quality=75";
import img2 from "./coolerFan-img/2.jpg?w=800&format=webp&quality=75";
import img3 from "./coolerFan-img/3.jpg?w=800&format=webp&quality=75";
import img4 from "./coolerFan-img/4.jpg?w=800&format=webp&quality=75";
import img5 from "./coolerFan-img/5.jpg?w=800&format=webp&quality=75";




const CoolerFan = () => {
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
            Noctua NH-D15 Dual Tower CPU Cooler
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Fan Size: 140mm x 2</li>
            <li>Speed: 300–1500 RPM</li>
            <li>Airflow: 82.5 CFM</li>
            <li>Noise Level: 24.6 dBA</li>
            <li>Connector: 4-Pin PWM</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 11,500
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 12,000
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
            Cooler Master Hyper 212 Black Edition
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Fan Size: 120mm</li>
            <li>Speed: 600–2000 RPM</li>
            <li>Airflow: 42 CFM</li>
            <li>Noise Level: 26 dBA</li>
            <li>Connector: 4-Pin PWM</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 3,800</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 4,200
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
            be quiet! Dark Rock Pro 4
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Fan Size: 120mm + 135mm</li>
            <li>Speed: 1200–1500 RPM</li>
            <li>Airflow: 67.8 CFM</li>
            <li>Noise Level: 24.3 dBA</li>
            <li>Connector: 4-Pin PWM</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 9,800</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 10,500
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
            Arctic Freezer 34 eSports DUO
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Fan Size: 120mm x 2</li>
            <li>Speed: 200–2100 RPM</li>
            <li>Airflow: 72.8 CFM</li>
            <li>Noise Level: 28 dBA</li>
            <li>Connector: 4-Pin PWM</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 4,200</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 4,600
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
            DeepCool AK620 High-Performance Air Cooler
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Fan Size: 120mm x 2</li>
            <li>Speed: 500–1850 RPM</li>
            <li>Airflow: 68.99 CFM</li>
            <li>Noise Level: 28 dBA</li>
            <li>Connector: 4-Pin PWM</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 6,900</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 7,400
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

export default CoolerFan;
