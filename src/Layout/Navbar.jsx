import { Link } from "react-router";
import trolley from "../assets/images/trolley.png";
import profile from "../assets/images/user.png";
import techZone from "../assets/images/favicon/tech-1.png";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#f6f6f6] shadow">
        {/* ________________Top Navbar____________ */}
        <div className="max-w-[1400px] mx-auto py-3 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between px-8">
            {/* Left: Logo */}
            <div className="md:w-auto text-center md:text-left pb-4 sm:pb-0">
              <Link to="/" className="group inline-flex items-center relative">
                {/* Logo */}
                <img
                  src={techZone}
                  alt="logo"
                  className="h-[40px] w-[40px] transition-transform duration-700 ease-in-out group-hover:-translate-y-2"
                />

                {/* Tooltip */}
                <span
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all
                 duration-500 border border-gray-300 text-gray-800 text-sm rounded px-2 py-1 shadow-lg shadow-gray-600 whitespace-nowrap"
                >
                  Home
                </span>
              </Link>
            </div>

            {/* Center: Buttons + Links */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              {/*___________ Buttons __________*/}
              <div className="flex flex-wrap justify-center gap-2">
                {/* Offers */}
                <Link
                  to="/offers"
                  className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700 transition-all duration-700 ease-in-out hover:bg-cyan-800 hover:text-white hover:animate-shake3d"
                >
                  Offers
                </Link>
                {/* pc builder */}
                <Link
                  to="/pcBuilder"
                  className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700 transition-all duration-700 ease-in-out hover:bg-cyan-800 hover:text-white hover:animate-shake3d"
                >
                  PC Builder
                </Link>
                {/* service center */}
                <Link
                  to="/serviceCenter"
                  className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700 transition-all duration-700 ease-in-out hover:bg-cyan-800 hover:text-white hover:animate-shake3d"
                >
                  Service Center
                </Link>
              </div>
              {/* ___________ Links___________ */}
              <div className="flex flex-wrap justify-center gap-4 items-center font-sans mt-2 lg:mt-0">
                {/* Blog */}
                <Link
                  to="/blog"
                  className="text-gray-600 font-bold hover:text-cyan-700 transition-all duration-700 ease-in-out hover:animate-shake3d"
                >
                  BLOG
                </Link>

                {/* stores */}
                <Link
                  to="/stores"
                  className="text-gray-600 font-bold hover:text-cyan-700 transition-all duration-700 ease-in-out hover:animate-shake3d"
                >
                  STORES
                </Link>

                {/* corporate */}
                <Link
                  to="/corporate"
                  className="text-gray-600 font-bold hover:text-cyan-700 transition-all duration-700 ease-in-out hover:animate-shake3d"
                >
                  CORPORATE
                </Link>

                {/* About Us */}
                <Link
                  to="/aboutUs"
                  className="text-gray-600 font-bold hover:text-cyan-700 transition-all duration-700 ease-in-out hover:animate-shake3d uppercase"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Right: Icons */}
            <div className="flex w-full md:w-auto justify-center md:justify-end pt-4 lg:pt-0 xl:pt-0">
              <div className="flex gap-3 items-center">
                <Link>
                  <img
                    className="h-10 w-10 bg-white rounded-full p-2 shadow-lg hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-yellow-300"
                    src={trolley}
                    alt="Trolley"
                  />
                </Link>
                <Link to="/signup">
                  <img
                    className="h-10 w-10 bg-white rounded-full p-2 shadow-lg hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-yellow-300"
                    src={profile}
                    alt="Profile"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ______________________Second Navbar_________________________ */}
        <div className="bg-gray-800">
          <div id="navigation" className="max-w-[1400px] mx-auto px-4">
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
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

              {/* Tablet */}
              <li className="relative group">
                <a
                  href="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Tablet
                </a>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Xiaomi
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Samsung
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      i Mac
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Mac Pro
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Mac Mini
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Asus
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Dell
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Hp
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Lenovo
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Asus
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Acer
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Brand Pc
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Custom Pc
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Gaming Pc
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Pc
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Mini Pc
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Cable
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Printer
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Scanner
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Power Supply
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Projector
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      AirPods
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      AirBuds
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Headphone
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Microphone
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Gimbal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Device Stand
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Action Camera
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Drone Gear
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Xiaomi
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Lenovo
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      One Plus
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Samsung
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
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      LG
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Dell
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Lenovo
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </a>
                    <a
                      href="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Samsung
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* ____________________Search Product____________________ */}
      <div class="mx-auto w-full max-w-screen-md py-10 leading-6 px-4">
        <form class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded border border-gray-300 shadow-lg">
          <svg
            class="absolute left-3 block h-5 w-5 text-gray-400"
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
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            name="search"
            class="h-14 w-full rounded-md py-4 pr-36 pl-12 outline-none focus:ring-2 text-sm sm:text-base"
            placeholder="Search Your Choice"
          />
          <button
            type="submit"
            class="absolute right-1 h-12 rounded bg-gray-900 px-6 text-sm sm:px-10 sm:text-base font-medium text-white hover:bg-cyan-900 transition-all duration-500 ease-in-out"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
