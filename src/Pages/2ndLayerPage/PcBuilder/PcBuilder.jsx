import { Link } from "react-router";
import img1 from "./icons/1.png?w=800&format=webp&quality=75";
import img2 from "./icons/2.png?w=800&format=webp&quality=75";
import img3 from "./icons/3.png?w=800&format=webp&quality=75";
import img4 from "./icons/4.png?w=800&format=webp&quality=75";
import img5 from "./icons/5.png?w=800&format=webp&quality=75";
import img6 from "./icons/6.png?w=800&format=webp&quality=75";
import img7 from "./icons/7.png?w=800&format=webp&quality=75";
import img8 from "./icons/8.png?w=800&format=webp&quality=75";
import img9 from "./icons/9.png?w=800&format=webp&quality=75";
import img10 from "./icons/10.png?w=800&format=webp&quality=75";
import img11 from "./icons/11.png?w=800&format=webp&quality=75";
import img12 from "./icons/12.png?w=800&format=webp&quality=75";
import img13 from "./icons/13.png?w=800&format=webp&quality=75";

const PcBuilder = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-800 to-sky-300 min-h-screen flex justify-center items-start">
      <div className="max-w-[1000px] w-full mx-auto p-6 mt-10 mb-[150px] bg-[#0a71169a]  shadow-lg rounded-xl">
        <div className="border border-gray-300 rounded-xl ">
          {/* Top */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 p-4">
            {/* Heading */}
            <h1 className="text-gray-200 font-semibold text-sm border   lg:text-xl sm:text-2xl bg-[#052f03] py-2 px-2 lg:px-4 rounded-lg text-center sm:text-left w-full sm:w-auto">
              Build Your Own Computer on
              <span className="text-yellow-300"> TECHNOLOGY ZONE</span>
            </h1>

            {/* Total Cost Box */}
            <div className="w-full sm:w-auto border-2 border-black  rounded-lg py-3 px-6 sm:px-10 text-left bg-gray-100">
              <h1 className="font-semibold text-gray-900">Total Cost :</h1>
              <h1 className="font-semibold text-gray-900">Total Items :</h1>
            </div>
          </div>

          {/* Title */}
          <div className="p-4">
            <div className="bg-[#93DA97] p-2 text-center  rounded">
              <h1 className="text-gray-900 font-semibold text-lg">
                Core Components
              </h1>
            </div>
          </div>

          {/*______________________ Core Components______________________ */}

          {/* Motherboard */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8 ">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img1} alt="" />

              <h1 className=" text-sm md:text-base lg:text-xl font-semi-bold">
                Motherboard
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/motherBoard"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
              border border-gray-300 rounded px-2  lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Processor */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 shadow-md mt-3">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8 ">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img2} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Processor
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/processor"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg 
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Ram */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img3} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                RAM
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/ram"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* HDD */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img4} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                HDD
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/hdd"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
          {/* SSD */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img5} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                SSD
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/ssd"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Cooler fan */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img6} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Cooler Fan
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/cooler"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
          {/* Casing */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img7} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Casing
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/casing"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Power supply */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img8} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Power Supply
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/powerSupply"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Graphics Card */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img9} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Graphics Card
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/graphicsCard"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* __________Title_________ */}
          <div className="p-4">
            <div className="bg-[#93DA97] p-2 text-center  rounded ">
              <h1 className="text-gray-900 font-semibold text-lg">
                Peripherals and Others
              </h1>
            </div>
          </div>

          {/* Monitor */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img10} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Monitor
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/monitor"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Mouse */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img11} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Mouse
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/mouse"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Keyboard */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img12} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Keyboard
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/keyboard"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
          {/* Speaker */}
          <div className="flex justify-between items-center mx-4 py-2 px-2 lg:px-4  bg-[#FAF7F3] border-b border-gray-200 mt-3 shadow-md mb-6">
            <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
              <img className="h-6 lg:h-10  w-6 lg:w-10" src={img13} alt="" />

              <h1 className="text-sm md:text-base lg:text-xl font-semi-bold">
                Speaker
              </h1>
            </div>

            {/* Button */}
            <Link
              to="/speaker"
              className="relative inline-block text-gray-600 font-semibold text-sm lg:text-lg  
              border border-gray-300 rounded px-2 lg:px-4 py-2 overflow-hidden 
              transition-colors duration-[800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 
              before:bg-gradient-to-r before:from-yellow-100 before:to-green-600  
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PcBuilder;
