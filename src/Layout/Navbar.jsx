// // Google Authentication..
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../Firebase/firebase.init";
// // Google Authentication..

import { Link } from "react-router";
import trolley from "../assets/images/trolley.png";
import profile from "../assets/images/user.png";
import techZone from "../assets/images/favicon/tech-1.png";
import { useState } from "react";

const Navbar = () => {
  const [searchField, setSearchField] = useState(false);

  // Google sign in ***
  // const provider = new GoogleAuthProvider();

  // const handleGoogleSignIn =()=>{
  //   signInWithPopup(auth, provider)
  //   .then(result =>{
  //     console.log (result);
  //   })

  //   .catch(error =>{
  //     console.log (error, 'ERROR')
  //   })
  // }

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
                 duration-700  text-green-800 text-md font-semibold  whitespace-nowrap"
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

            {/*----------- Right: Icons-------------- */}
            <div className="flex w-full md:w-auto justify-center md:justify-end pt-4 lg:pt-0 xl:pt-0">
              <div className="flex gap-3 items-center">
                {/* *
                1/ প্রথমে একটা Hook ডিক্লেয়ার করেছি  const [searchField, setSearchField] = useState(false);
                 initial value = false  প্রাথমিক মান মিথ্যা দিয়েছি।

                2/ তারপর যে জিনিস টা show করবো সেটার একটা মান দিয়েছি  {searchField === true && (
                <>
                ভিতরে যে জিনিস টা দেখাবো সেটা রেখছি।
                </>
                )}
                

                3/ সার্চ আইকনে এসে Arrow funtion লিখে শর্ত দিয়েছি... সত্য হলে দেখাবে, মিথ্যা হলে দেখাবে না। 
                এবং setSearchfield দিয়ে মান সেট করেছি।
                
                *  */}
                {/* _______________________--_start_--___________________________ */}

                {searchField === true ? (
                  <>
                    {/* Closing icon */}
                    <button onClick={() => setSearchField(!searchField)}>
                      <img
                        className="h-10 w-10 bg-white rounded-full p-2 shadow-lg
                         hover:animate-shake3d transition-all duration-700 
                         ease-in-out hover:bg-red-500"
                        src="https://i.postimg.cc/Ssn484q4/cancel.png"
                        alt="Search"
                      />
                    </button>
                  </>
                ) : (
                  <>
                    {/* search Icon */}
                    <button onClick={() => setSearchField(!searchField)}>
                      <img
                        className="h-10 w-10 bg-white rounded-full p-1 shadow-lg
                         hover:animate-shake3d transition-all duration-700 
                         ease-in-out hover:bg-lime-400"
                        src="https://i.postimg.cc/rm531PBz/search.png"
                        alt="Search"
                      />
                    </button>
                  </>
                )}
                {/* _______________________--_End_--___________________________ */}

                {/* Cart */}
                <Link>
                  <img
                    className="h-10 w-10 bg-white rounded-full p-2 shadow-lg
                     hover:animate-shake3d transition-all duration-700 
                     ease-in-out hover:bg-lime-400"
                    src={trolley}
                    alt="Trolley"
                  />
                </Link>
                {/* ****************** log in ********************** */}
                <Link to="/signup">
                  <img
                    className="h-10 w-10 bg-white rounded-full p-2 shadow-lg
                     hover:animate-shake3d transition-all duration-700
                      ease-in-out hover:bg-lime-400"
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
                      Apple
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
                  to="#"
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
                <a
                  to="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Desktop
                </a>
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
                    <Link
                      to="/powerSuply"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Power Supply
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Sound Appliance */}
              <li className="relative group">
                <a
                  to="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Sound Appliance
                </a>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      AirPods
                    </a>
                  </li>
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      AirBuds
                    </a>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Headphone
                    </a>
                    <a
                      to="#"
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
                  to="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Smart Gadget
                </a>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Gimbal
                    </a>
                  </li>
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Device Stand
                    </a>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Action Camera
                    </a>
                    <a
                      to="#"
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
                  to="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Smart Watch
                </a>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </a>
                  </li>
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Xiaomi
                    </a>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Lenovo
                    </a>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      One Plus
                    </a>
                    <a
                      to="#"
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
                  to="#"
                  className="block px-6 py-4 text-sm font-semibold text-white hover:bg-cyan-800"
                >
                  Monitor
                </a>
                {/* Dropdown */}
                <ul className="absolute top-full right-0 w-40 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 ease-out flex flex-col bg-white border border-gray-300 shadow-lg z-10">
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      LG
                    </a>
                  </li>
                  <li>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Dell
                    </a>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Lenovo
                    </a>
                    <a
                      to="#"
                      className="block w-full text-gray-700 font-semibold text-sm px-4 py-2 text-center hover:bg-cyan-100 transition-colors duration-300 hover:text-blue-900"
                    >
                      Apple
                    </a>
                    <a
                      to="#"
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

      {searchField === true && (
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
              className="h-11 w-full rounded-md py-2 pr-32 pl-10 outline-none focus:ring-2
               focus:ring-black text-sm sm:text-base"
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
    </>
  );
};

export default Navbar;
