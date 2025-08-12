import img1 from "./casing-img/1.jpg";
import img2 from "./casing-img/2.jpg";
import img3 from "./casing-img/3.jpg";
import img4 from "./casing-img/4.jpg";
import img5 from "./casing-img/5.jpg";

const Casing = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-10 mb-30">
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
            NZXT H510 Mid Tower ATX Case
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Form Factor: Mid Tower</li>
            <li>Motherboard Support: ATX, mATX, Mini-ITX</li>
            <li>Front I/O: USB 3.1, USB 3.0, Audio</li>
            <li>Cooling: 2x 120mm fans included</li>
            <li>Tempered Glass Side Panel</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 7,800</p>
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
            Cooler Master MasterBox TD500 Mesh
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Form Factor: Mid Tower</li>
            <li>Motherboard Support: ATX, mATX, Mini-ITX</li>
            <li>Cooling: 3x ARGB 120mm fans included</li>
            <li>Mesh Front Panel for airflow</li>
            <li>Tempered Glass Side Panel</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">৳ 9,500</p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 10,000
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
            Lian Li PC-O11 Dynamic
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Form Factor: Mid Tower</li>
            <li>Motherboard Support: E-ATX, ATX, mATX, Mini-ITX</li>
            <li>Dual Chamber Design</li>
            <li>Tempered Glass Front & Side</li>
            <li>Supports up to 9 fans</li>
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
            Phanteks Eclipse P500A
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Form Factor: Mid Tower</li>
            <li>Motherboard Support: E-ATX, ATX, mATX, Mini-ITX</li>
            <li>3x 140mm D-RGB fans included</li>
            <li>High Airflow Mesh Front</li>
            <li>Tempered Glass Side Panel</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 13,200
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 13,800
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
            Corsair iCUE 5000X RGB
          </h2>
          <ul className="text-base md:text-lg mt-4 text-gray-600 list-disc list-inside">
            <li>Form Factor: Mid Tower</li>
            <li>Motherboard Support: E-ATX, ATX, mATX, Mini-ITX</li>
            <li>4x 120mm RGB fans included</li>
            <li>Tempered Glass Front & Side</li>
            <li>Full Cable Management System</li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            ৳ 17,800
          </p>
          <p className="text-base md:text-lg line-through text-gray-500">
            ৳ 18,500
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

export default Casing;
