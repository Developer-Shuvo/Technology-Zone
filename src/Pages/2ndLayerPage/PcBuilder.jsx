import { Link } from "react-router";
import img1 from "./pc-builder/motherboard.png";
// import img2 from "./pc-builder/processor.png";
// import img3 from "./images/pc-builder/ram.png";
// import img4 from "./images/pc-builder/hard-disk.png";
// import img5 from "./images/pc-builder/ssd.png";
// import img6 from "./images/pc-builder/cooler-fan.png";
// import img7 from "./Offers/images/pc-builder/casing.png";
// import img8 from "./Offers/images/pc-builder/power-supply.png";
// import img9 from "./Offers/images/pc-builder/graphics-card.png";
// import img10 from "./Offers/images/pc-builder/monitor.png";
// import img11 from "./Offers/images/pc-builder/mouse.png";
// import img12 from "./Offers/images/pc-builder/keyboard.png";
// import img13 from "./Offers/images/pc-builder/speaker.png";

const PcBuilder = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-gray-100 rounded-xl">
      <div className="border border-gray-300 rounded-xl ">
        {/* Top */}
        <div className=" flex justify-between items-center p-4">
          <h1 className="text-gray-800 font-semibold text-lg">
            Build Your Own Computer on TECHNOLOGY ZONE
          </h1>

          {/* Total Cost Box */}
          <div className="border-2 rounded-lg py-3 px-10 text-left">
            <h1 className="font-semibold text-gray-800">Total Cost : </h1>
            <h1 className="font-semibold text-gray-600">Total Items :</h1>
          </div>
        </div>

        {/* Title */}
        <div className="p-4">
          <div className="bg-gray-200 p-2 text-left ">
            <h1 className="text-gray-800 font-semibold text-lg">
              Core Components
            </h1>
          </div>
        </div>

        {/*______________________ Core Components______________________ */}

        <section className=" ">
          {/* Motherboard */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FEEBF6] ">
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
              before:bg-gradient-to-r before:from-yellow-300 before:to-cyan-400 
              before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
              hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10">Choose</span>
            </Link>
          </div>

          {/* Processor */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#FEEBF6] mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Processor</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* Ram */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7] mt-2">
            <div className="flex items-center gap-8 ">
              <img
                className="h-10 w-10"
                src="../2ndLayerPage/pc-builder/ram.png"
                alt=""
              />

              <h1 className="text-xl font-semi-bold">RAM</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* HDD */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7] mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">HDD</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>
          {/* SSD */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">SSD</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* Cooler fan */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Cooler Fan</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>
          {/* Casing */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]    mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Casing</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* Power supply */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Power Supply</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* Graphics Card */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Graphics Card</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* Title */}
          <div className="p-4">
            <div className="bg-gray-200 p-2 text-left ">
              <h1 className="text-gray-800 font-semibold text-lg">
                Peripherals and Others
              </h1>
            </div>
          </div>

          {/* Monitor */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Monitor</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* Mouse */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Mouse</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>

          {/* Keyboard */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Keyboard</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>
          {/* Speaker */}
          <div className="flex justify-between items-center mx-4 py-2 px-4  bg-[#E8FFD7]  mt-2">
            <div className="flex items-center gap-8 ">
              <img className="h-10 w-10" src="" alt="" />

              <h1 className="text-xl font-semi-bold">Speaker</h1>
            </div>

            <Link
              to="#"
              className="text-gray-600 font-semibold text-lg border-2 border-gray-900 rounded px-4 py-2"
            >
              Choose
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PcBuilder;
