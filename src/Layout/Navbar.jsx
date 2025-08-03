import { Link } from "react-router";
import trolley from "../assets/images/trolley.png";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#f6f6f6] shadow">
        <div className="max-w-7xl mx-auto flex items-center px-4 py-3">
          {/* Left Section: Title + Buttons */}
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-bold mr-10">Technology Zone</h1>{" "}
            {/* 40px gap (mr-10) */}
            <button
              className="px-4 py-2 font-semibold rounded-lg bg-white shadow-lg text-orange-600
                   transition-all duration-700 ease-in-out
                   hover:bg-sky-800 hover:text-white hover:animate-shake3d"
            >
              Offers
            </button>
            <button
              className="px-4 py-2 font-semibold rounded-lg bg-white shadow-lg text-orange-500
                   transition-all duration-700 ease-in-out
                   hover:bg-sky-800 hover:text-white hover:animate-shake3d"
            >
              PC Builder
            </button>
            <button
              className="px-4 py-2 font-semibold rounded-lg bg-white shadow-lg text-orange-500
                   transition-all duration-700 ease-in-out
                   hover:bg-sky-800 hover:text-white hover:animate-shake3d"
            >
              Service Center
            </button>
            <div className="flex gap-4 ml-4 items-center font-extralight">
              <Link
                to=""
                className="text-gray-700  font-bold hover:text-green-600  transition-all duration-700 ease-in-out hover:animate-shake3d"
              >
                BLOG
              </Link>
              <Link
                to=""
                className="text-gray-700  font-bold hover:text-green-600  transition-all duration-700 ease-in-out hover:animate-shake3d"
              >
                STORES
              </Link>
              <Link
                to=""
                className="text-gray-700  font-bold hover:text-green-600  transition-all duration-700 ease-in-out hover:animate-shake3d"
              >
                CORPORATE
              </Link>
              <Link
                to=""
                className="text-gray-700  font-bold hover:text-green-600  transition-all duration-700 ease-in-out hover:animate-shake3d"
              >
                USED DEVICE
              </Link>
            </div>
          </div>

          {/* Right Section: Icon */}
          <div className="flex justify-end ml-auto">
            <div className="flex gap-3 items-center">
              <Link>
                {" "}
                <img
                  className="h-10 w-10 bg-white rounded-full p-2 shadow-lg  hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-sky-800"
                  src={trolley}
                  alt=""
                />{" "}
              </Link>

              <Link>
                {" "}
                <img
                  className="h-10 w-10 bg-white rounded-full p-2 shadow-lg  hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-sky-800"
                  src={trolley}
                  alt=""
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
