import { Link } from "react-router";
import img1 from "./pc-builder/motherboard.png";
import img2 from "./pc-builder/chip.png";
import img3 from "./pc-builder/ram.png";
import img4 from "./pc-builder/hdd.png";
import img5 from "./pc-builder/ssd-drive.png";
import img6 from "./pc-builder/cooler.png";
import img7 from "./pc-builder/cpu.png";
import img8 from "./pc-builder/power-supply.png";
import img9 from "./pc-builder/graphic-card.png";
import img10 from "./pc-builder/monitor.png";
import img11 from "./pc-builder/mouse.png";
import img12 from "./pc-builder/keyboard.png";
import img13 from "./pc-builder/headphone.png";

const PcBuilder = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-white shadow-lg rounded-xl">
      <div className="border border-gray-300 rounded-xl ">
        {/* Top */}
        <div className=" flex justify-between items-center p-4">
          <h1
            className="text-gray-200 font-semibold text-2xl
           bg-[#2F5249] py-2 px-4 rounded-1g rounded"
          >
            Build Your Own Computer on 
            <span className="text-yellow-300">  TECHNOLOGY ZONE</span>
          </h1>

          {/* Total Cost Box */}
          <div className="border-2 rounded-lg py-3 px-10 text-left">
            <h1 className="font-semibold text-gray-800">Total Cost : </h1>
            <h1 className="font-semibold text-gray-600">Total Items :</h1>
          </div>
        </div>

        {/* Title */}
        <div className="p-4">
          <div className="bg-[#9ECAD6] p-2 text-left ">
            <h1 className="text-gray-800 font-semibold text-lg">
              Core Components
            </h1>
          </div>
        </div>

        {/*______________________ Core Components______________________ */}

        <section className=" ">
          {/* Motherboard */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img1} alt="" />

              <h1 className="text-xl font-semi-bold">Motherboard</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Processor */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img2} alt="" />

              <h1 className="text-xl font-semi-bold">Processor</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Ram */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img3} alt="" />

              <h1 className="text-xl font-semi-bold">RAM</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* HDD */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img4} alt="" />

              <h1 className="text-xl font-semi-bold">HDD</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
          {/* SSD */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img5} alt="" />

              <h1 className="text-xl font-semi-bold">SSD</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Cooler fan */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img6} alt="" />

              <h1 className="text-xl font-semi-bold">Cooler Fan</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
          {/* Casing */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img7} alt="" />

              <h1 className="text-xl font-semi-bold">Casing</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Power supply */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img8} alt="" />

              <h1 className="text-xl font-semi-bold">Power Supply</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Graphics Card */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img9} alt="" />

              <h1 className="text-xl font-semi-bold">Graphics Card</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* __________Title_________ */}
          <div className="p-4">
            <div className="bg-[#9ECAD6]  p-2 text-left ">
              <h1 className="text-gray-800 font-semibold text-lg">
                Peripherals and Others
              </h1>
            </div>
          </div>

          {/* Monitor */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img10} alt="" />

              <h1 className="text-xl font-semi-bold">Monitor</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Mouse */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img11} alt="" />

              <h1 className="text-xl font-semi-bold">Mouse</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Keyboard */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img12} alt="" />

              <h1 className="text-xl font-semi-bold">Keyboard</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
          {/* Speaker */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md mb-6">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src={img13} alt="" />

              <h1 className="text-xl font-semi-bold">Speaker</h1>
            </div>

            {/* Button */}
            <Link
              to="#"
              className="relative inline-block text-gray-600 font-semibold text-lg 
              border border-gray-300 rounded px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-red-600 before:to-lime-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PcBuilder;
