import { Link } from "react-router";
import trolley from "../assets/images/trolley.png";
import profile from "../assets/images/user.png";

const Navbar = () => {
  return (
    <>
      {/* ____________________Top Navbar________________________ */}
      <header className="bg-[#f6f6f6] shadow">
        <div className="max-w-[1400px] mx-auto flex items-center  py-3">
          {/* Left Section: Title + Buttons */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-blue-700 mr-12">
              <span className="text-red-500 text-3xl">Technology</span> Zone
            </h1>

            {/* 40px gap (mr-10) */}
            <button
              className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700
                   transition-all duration-700 ease-in-out
                   hover:bg-sky-800 hover:text-white hover:animate-shake3d"
            >
              Offers
            </button>
            <button
              className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700
                   transition-all duration-700 ease-in-out
                   hover:bg-sky-800 hover:text-white hover:animate-shake3d"
            >
              PC Builder
            </button>
            <button
              className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700
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
                  className="h-10 w-10 bg-white rounded-full p-2 shadow-lg  hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-yellow-300"
                  src={trolley}
                  alt=""
                />{" "}
              </Link>

              <Link>
                {" "}
                <img
                  className="h-10 w-10 bg-white rounded-full p-2 shadow-lg  hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-yellow-300"
                  src={profile}
                  alt=""
                />{" "}
              </Link>
            </div>
          </div>
        </div>

        {/* ______________________Second Navbar_________________________ */}
        <div className="bg-gray-800">
          <div id="navigation" className=" max-w-[1400px] mx-auto">
            <ul
              id="desktop-nav"
              className="hidden md:flex justify-center space-x-6"
            >
              {/* Phone */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Smart Phone
                </a>

                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>

              {/* Tablet*/}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Tablet
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>

              {/* Mac */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Mac
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
              {/* Laptop */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Laptop
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
              {/* Desktop */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Desktop
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
              {/* Accessories */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Accessories
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
              {/* Sound Appliance */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Sound Appliance
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
              {/* Smart Gadget */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Smart Gadget
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
              {/* Smart Watch */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Smart Watch
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
              {/* Monitor */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Monitor
                </a>
                {/* Dropdown */}
                <ul
                  className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
               transform origin-top transition-all duration-300 ease-out
               flex flex-col bg-white border rou-b border-gray-300 shadow-lg  z-10"
                >
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Search Product */}
      <div class="mx-auto w-screen max-w-screen-md py-10 leading-6">
        <form class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded border border-gray-300 shadow-lg">
          <svg
            class="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input
            type="name"
            name="search"
            class="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
            placeholder="Search Your Choice"
          />
          {/* Search button */}
          <button
            type="submit"
            class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-cyan-800"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
