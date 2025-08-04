import React from "react";
import img1 from "../assets/images/banner-image/banner-2.jpg";
import img2 from "../assets/images/banner-image/banner-5.jpg";
import img3 from "../assets/images/banner-image/banner-6.jpg";

const NewArrival = () => {
  return (
    <div className="bg-[#FEEBF6] ">
      <div className="max-w-[1400px] mx-auto mt- px-4">
        <div className="flex flex-col lg:flex-row xl:flex-row gap-10 lg:gap-16 items-center justify-between py-8">
          {/* Text Section */}
          <div className="w-full text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-900  ">
              New Arrival
            </h1>
            <p className="text-gray-800 font-semibold text-base sm:text-lg mt-6 sm:mt-8">
              Our Upcoming Products. Very Unique and Special. <br />
              We are confident that you will like our upcoming products.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col sm:flex-row lg:flex-row xl:flex-row sm:flex-wrap justify-center items-center gap-6 w-full py-4 lg:w-1/2">
            {[img1, img2, img3].map((img, i) => (
              <div
                key={i}
                className="group flex w-full max-w-[280px] flex-col overflow-hidden
              border border-gray-100 bg-white shadow-md rounded-lg 
              transform transition-transform duration-500 hover:scale-110 hover:-rotate-6 hover:shadow-xl"
              >
                <a className="relative flex h-44 overflow-hidden" href="#">
                  <img
                    className="absolute top-0 right-0 h-full w-full object-cover"
                    src={img}
                    alt={`Product ${i + 1}`}
                  />
                  <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-2">
                    <div className="h-2.5 w-2.5 rounded-full border-2 border-white bg-white" />
                    <div className="h-2.5 w-2.5 rounded-full border-2 border-white bg-transparent" />
                    <div className="h-2.5 w-2.5 rounded-full border-2 border-white bg-transparent" />
                  </div>
                  <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                    <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-lg tracking-tight text-slate-900">
                      Lululemon Comfort Tee - White
                    </h5>
                  </a>
                  <div className="mt-2 mb-4 flex items-center justify-between">
                    <p>
                      <span className="text-2xl font-bold text-slate-900">
                        $79
                      </span>
                      <span className="text-sm text-slate-900 line-through ml-1">
                        $99
                      </span>
                    </p>
                  </div>
                  <button className="flex items-center justify-center bg-gray-900 px-3 py-2 text-sm text-white transition hover:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222.01.042 1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
