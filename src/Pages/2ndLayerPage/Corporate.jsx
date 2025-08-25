import img1 from "./corporate/email.png";
import img2 from "./corporate/call.png";
import img3 from "./corporate/location.png";

const Corporate = () => {
  return (
    <section className="max-w-[1400px] mx-auto min-h-screen mt-20 md:pt-40 lg:pt-30 mb-30  flex flex-col items-center justify-center px-10">
      <div className="flex w-full  mb- bg-white rounded-lg shadow-lg overflow-hidden flex-col md:flex-row">
        {/* Left Side - Color Box with Text (Hidden on small devices) */}
        <div className="hidden md:flex bg-slate-600 text-white flex-col justify-center p-8 md:w-2/5">
          <h2 className="text-3xl lg:text-4xl font-bold leading-10">
            Integrate Smartphones & Gadgets for Corporate Connectivity.
          </h2>
          <p className="mt-6 lg:mt-8 text-sm lg:text-base font-semibold leading-relaxed">
            Use the newest devices and cellphones to improve your business. They
            facilitate speedier work and connection. Keep up with modern,
            user-friendly technology for a more seamless business encounter.
          </p>

          {/* button */}
          <div className="flex justify-center">
            <a
              href="#"
              className="mt-6 relative inline-flex items-center text-gray-100 font-semibold text-lg 
                    border border-gray-300 rounded px-8 py-2 overflow-hidden
                    transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                    before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                    before:bg-gradient-to-r before:from-lime-300 before:to-yellow-500 
                    before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] 
                    hover:before:w-full hover:text-black z-10 before:z-0"
            >
              <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
                Explore
              </span>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center p-6 sm:p-8 md:w-3/5 w-full">
          <h1 className="text-center text-xl sm:text-3xl font-bold py-2 px-2 rounded-lg bg-gradient-to-r from-blue-50 to-blue-200 mb-8">
            Make a schedule
          </h1>

          <form className="flex flex-col gap-6">
            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
              {/* Company Name */}
              <label className="block">
                <p className="mb-1 mt-2 text-base sm:text-lg font-bold text-gray-600">
                  Company Name
                </p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="text"
                  placeholder="Company name"
                />
              </label>

              {/* Meeting Date */}
              <label className="block" htmlFor="meeting-date">
                <p className="mb-1 mt-2 text-base sm:text-lg font-bold text-gray-600">
                  Meeting Date
                </p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="date"
                  id="meeting-date"
                />
              </label>

              {/* Email */}
              <label className="block">
                <p className="mb-1 mt-2 text-base sm:text-lg font-bold text-gray-600">
                  Write Your Email
                </p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="email"
                  placeholder="Enter Email"
                />
              </label>

              {/* Phone Number */}
              <label className="block">
                <p className="mb-1 mt-2 text-base sm:text-lg font-bold text-gray-600">
                  Phone Number
                </p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="number"
                  placeholder="Enter Phone Number"
                />
              </label>

              {/* Message */}
              <label className="block sm:col-span-2">
                <p className="mb-1 mt-2 text-base sm:text-lg font-bold text-gray-600">
                  Message
                </p>
                <textarea
                  className="h-32 w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  placeholder="Write your special requirements here"
                ></textarea>
              </label>
            </div>

            {/* Submit Button Centered */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 rounded-full bg-yellow-400 px-6 py-2 text-base font-semibold shadow-md outline-none 
            ring-yellow-500 ring-offset-2 transition hover:bg-yellow-500 focus:ring-2 md:w-40"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-16 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {/* Card 1 */}
          <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="p-3 sm:p-4 bg-blue-200 text-white rounded-lg flex items-center justify-center">
              <img
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                src={img1}
                alt="Email Icon"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Email Address
              </h2>
              <p className="text-sm sm:text-base text-gray-600 break-words">
                corporate@gmail.com
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="p-3 sm:p-4 bg-green-200 text-white rounded-lg flex items-center justify-center">
              <img
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                src={img2}
                alt="Phone Icon"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Phone Number
              </h2>
              <p className="text-sm sm:text-base text-gray-600 break-words">
                +880 1234567890
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="p-3 sm:p-4 bg-purple-200 text-white rounded-lg flex items-center justify-center">
              <img
                className="h-8 w-10 sm:h-10 sm:w-12 object-contain"
                src={img3}
                alt="Office Icon"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Corporate Office
              </h2>
              <p className="text-sm sm:text-base text-gray-600 break-words">
                123 Corporate St, Business City, Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
