import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5"; // 3 Menu icon & Close icon
import trolley from "../assets/images/trolley.png"; 
import profile from "../assets/images/user.png";
import techZone from "../assets/images/favicon/tech-1.png";
import home from "../assets/images/favicon/home2.png"; // Use your correct home icon path

const Navbar = () => {
  const [searchField, setSearchField] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Responsive: close menu on scroll or outside click
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    const handleClickOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <header className="bg-[#f6f6f6] shadow fixed w-full z-50 left-0 top-0">
        {/* ========== TOP NAVBAR (Responsive) ========== */}
        <nav className="max-w-[1400px] mx-auto py-3 px-4" ref={navRef}>
          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-3xl text-green-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </div>

          {/* Main Nav Content */}
          <div
            className={`flex flex-col md:flex-row items-center justify-between  
              px-8 ${open ? "pb-5 pt-5" : "pb-0"}  
              ${open ? "bg-[#62bcc6]" : "bg-transparent"}  
              md:bg-[#f6f6f6]  
              md:static absolute left-0 w-full z-50 transition-all duration-700 ease-in-out  
              ${open ? "top-[54px]" : "-top-[520px]"} `}
          >
            {/* Left: Logo */}
            <div className="md:w-auto text-center md:text-left pb-4 sm:pb-0">
              <Link to="/" className="group inline-flex items-center relative">
                <img
                  src={techZone}
                  alt="logo"
                  className="h-[40px] w-[40px] transition-transform duration-700 ease-in-out group-hover:-translate-y-2"
                />
                {/* Tool tip, hover and text floating */}
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-700 text-green-800 text-md font-semibold whitespace-nowrap">
                  Home
                </span>
              </Link>
            </div>

            {/* Center: Buttons + Links */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  to="/offers"
                  className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700 transition-all duration-700 ease-in-out hover:bg-cyan-800 hover:text-white hover:animate-shake3d"
                >
                  Offers
                </Link>
                <Link
                  to="/pcBuilder"
                  className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700 transition-all duration-700 ease-in-out hover:bg-cyan-800 hover:text-white hover:animate-shake3d"
                >
                  PC Builder
                </Link>
                <Link
                  to="/serviceCenter"
                  className="px-4 py-2 font-semibold rounded bg-white shadow-lg text-orange-700 transition-all duration-700 ease-in-out hover:bg-cyan-800 hover:text-white hover:animate-shake3d"
                >
                  Service Center
                </Link>
              </div>
              {/* Links */}
              <div className="flex flex-wrap justify-center gap-4 items-center font-sans mt-2 lg:mt-0">
                <Link
                  to="/blog"
                  className="text-gray-600 font-bold hover:text-cyan-700 transition-all duration-700 ease-in-out hover:animate-shake3d"
                >
                  BLOG
                </Link>
                <Link
                  to="/stores"
                  className="text-gray-600 font-bold hover:text-cyan-700 transition-all duration-700 ease-in-out hover:animate-shake3d"
                >
                  STORES
                </Link>
                <Link
                  to="/corporate"
                  className="text-gray-600 font-bold hover:text-cyan-700 transition-all duration-700 ease-in-out hover:animate-shake3d"
                >
                  CORPORATE
                </Link>
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
                {searchField ? (
                  <button onClick={() => setSearchField(!searchField)}>
                    <img
                      className="h-10 w-10 bg-white rounded-full p-2 shadow-lg hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-red-500"
                      src="https://i.postimg.cc/Ssn484q4/cancel.png"
                      alt="Search"
                    />
                  </button>
                ) : (
                  <button onClick={() => setSearchField(!searchField)}>
                    <img
                      className="h-10 w-10 bg-white rounded-full p-1 shadow-lg hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-lime-400"
                      src="https://i.postimg.cc/rm531PBz/search.png"
                      alt="Search"
                    />
                  </button>
                )}
                <Link>
                  <img
                    className="h-10 w-10 bg-white rounded-full p-2 shadow-lg hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-lime-400"
                    src={trolley}
                    alt="Trolley"
                  />
                </Link>
                <Link to="/signup">
                  <img
                    className="h-10 w-10 bg-white rounded-full p-2 shadow-lg hover:animate-shake3d transition-all duration-700 ease-in-out hover:bg-lime-400"
                    src={profile}
                    alt="Profile"
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/*================ Second Navbar ================= */}
        <div className="bg-gray-800">
          <div id="navigation" className="max-w-[1400px] mx-auto px-4">
            <ul
              id="desktop-nav"
              className="hidden md:flex justify-center space-x-6"
            >
              <div className="flex items-center justify-center h-full">
                <Link
                  to="/"
                  className="group flex items-center gap-2 px-6 py-4 rounded-md transition-transform duration-300 hover:scale-125"
                >
                  <img
                    className="h-5 w-5 object-contain"
                    src={home}
                    alt="Back to home"
                  />
                  <span className="text-white font-medium text-sm group-hover:text-lime-400 ">
                    Home
                  </span>
                </Link>
              </div>

              {/* ________ Phone __________  */}
              <li className="relative group">
                <Link
                  to="/allPhone"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Phone
                </Link>

                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/smartPhone"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Smart Phone
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/featuredPhone"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Featured Phone
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Tablet */}
              <li className="relative group">
                <Link
                  to="/tablet"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Tablet
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/xiaomi"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Xiaomi
                    </Link>
                    <Link
                      to="/appleTablet"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      I Pad
                    </Link>
                    <Link
                      to="/samsungTablet"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Samsung
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sonyTablet"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Sony
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mac */}
              <li className="relative group">
                <Link
                  to="/mac"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Mac
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/iMac"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      i Mac
                    </Link>
                    <Link
                      to="/macPro"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Mac Pro
                    </Link>
                    <Link
                      to="/macMini"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Mac Mini
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Laptop */}
              <li className="relative group">
                <Link
                  to="/laptop"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Laptop
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/asus"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Asus
                    </Link>
                    <Link
                      to="/dell"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Dell
                    </Link>
                    <Link
                      to="/hp"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Hp
                    </Link>
                    <Link
                      to="/lenovo"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Lenovo
                    </Link>
                    <Link
                      to="/apple"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </Link>
                    <Link
                      to="/asusLaptop"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Asus
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/acer"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Acer
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Desktop */}
              <li className="relative group">
                <Link
                  to="/desktop"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Desktop
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/brandPc"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Brand Pc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gamingPc"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Gaming Pc
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Accessories */}
              <li className="relative group">
                <Link
                  to="/accessories"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Accessories
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/headphone"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Headphone
                    </Link>
                    <Link
                      to="/printer"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Printer
                    </Link>
                    <Link
                      to="/scanner"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Scanner
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Smart Gadget */}
              <li className="relative group">
                <Link
                  to="/smartGadget"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Smart Gadget
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="Gimbal"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Gimbal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/deviceStand"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Device Stand
                    </Link>
                    <Link
                      to="/actionCamera"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Action Camera
                    </Link>
                    <Link
                      to="/droneGear"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Drone Gear
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Smart Watch */}
              <li className="relative group">
                <Link
                  to="/smartWatch"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Smart Watch
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/appleWatch"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/xiaomiWatch"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Xiaomi
                    </Link>

                    <Link
                      to="/onePlusWatch"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      One Plus
                    </Link>
                    <Link
                      to="/samsungWatch"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Samsung
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Monitor */}
              <li className="relative group">
                <Link
                  to="/monitorr"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Monitor
                </Link>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <Link
                      to="/lg"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      LG
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dellMonitor"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Dell
                    </Link>
                    <Link
                      to="/lenovoMonitor"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Lenovo
                    </Link>
                    <Link
                      to="/appleMonitor"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </Link>
                    <Link
                      to="/samsungMonitor"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Samsung
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* ================= Search Field ================== */}
        {searchField && (
          <div className="mx-auto w-full max-w-screen-md py-4 px-4">
            <form className="relative flex w-full max-w-2xl items-center justify-between rounded border border-gray-300 shadow-lg">
              <svg
                className="absolute left-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                name="search"
                className="h-11 w-full rounded-md py-2 pr-32 pl-10 outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                placeholder="Search Your Choice"
              />
              <button
                type="submit"
                className="absolute right-0 h-11 rounded-r bg-gray-900 px-6 sm:px-8 text-sm sm:text-base font-medium text-white hover:bg-cyan-900 transition-all duration-300"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
