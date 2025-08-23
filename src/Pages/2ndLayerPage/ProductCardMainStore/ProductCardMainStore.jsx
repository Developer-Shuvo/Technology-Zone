import Sidebar from "../Phone/Sidebar/Sidebar";
import { Link } from "react-router";
import { AllProducts } from "../../AllProducts/AllProducts";

const ProductCardMainStore = ({ products, title, hideSidebar, isHomePage }) => {
  return (
    <div
      className={`mt-5 mb-40 mx-auto px-4 ${
        isHomePage ? "max-w-full" : "max-w-[1400px]"
      }`}
    >
      <div className="flex w-full">
        {/*___________ Sidebar___________ */}
        {!isHomePage && (
          <div className="w-[30%] min-w-[220px] max-w-[350px]">
            {!hideSidebar && (
              <div className="w-1/4">
                <Sidebar />
              </div>
            )}
          </div>
        )}

        {/*_________________ Card Section __________________ */}
        <div className={`${isHomePage ? "w-full" : "w-[70%] flex-1"}`}>
          <h1
            className=" text-3xl lg:text-4xl xl:text-5xl px-4 lg:px-2 xl:px-0 text-cyan-900 
          font-bold text-left flex items-center mb-8"
          >
            {title}
            <span className="text-5xl lg:text-6xl xl:text-6xl text-orange-600 font-serif pr-4">
              !
            </span>
          </h1>

          {/* ______________________ */}
          <div
            className={`grid gap-x-6 gap-y-14 px-4 sm:px-2 xl:px-0 ${
              isHomePage
                ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
             flex flex-col overflow-hidden rounded-lg  bg-white shadow-md 
             hover:shadow-lg hover:shadow-[#A4CCD9] transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <Link to={`/detailsPage/${product.id}`}>
                    <img
                      className="w-full 
                   h-28 sm:h-32 md:h-40 lg:h-48 xl:h-52 
                   object-cover 
                   rounded
                   transform transition-transform duration-700 hover:scale-125"
                      src={product.image}
                      alt={product.title}
                      loading="lazy" // performance boost
                    />
                  </Link>

                  {/* SALE Badge */}
                  <span
                    className="absolute top-4 left-[-28px] 
                 w-24 rotate-[-45deg] 
                 bg-black text-center text-xs sm:text-sm text-white font-semibold"
                  >
                    SALE
                  </span>
                </div>

                {/* Title */}
                <div className="px-2 pt-2 md:pt-2 lg:pt-3 xl:pt-4 ">
                  <Link to={`/detailsPage/${product.id}`}>
                    <h5
                      className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold 
                   tracking-tight text-slate-900 line-clamp-2"
                    >
                      {product.title}
                    </h5>
                  </Link>
                </div>

                {/* Body */}
                <div className="flex flex-col justify-between flex-grow px-1 md:px-2 lg:px-2 xl:px-4 pb-5 pt-2">
                  {/* Rating */}
                  <div className="flex  items-center mt-1 lg:mt-2 xl:mt-2  px-2 md:px-0 lg:px-0 xl:px-0">
                    <span className="mr-2 rounded bg-yellow-200 px-1 lg:px-3 xl:px-3 py-0.5 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-medium sm:font-semibold">
                      {product.rating}
                    </span>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5  ${
                          i < Math.round(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
                   00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 
                   2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 
                   1.688-1.54 1.118l-2.8-2.034a1 1 0 
                   00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                   1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                   1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Price + Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-[2px] lg:mt-4 gap-2 sm:gap-0">
                    {/* Price Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                      <span className="text-lg  lg:text-xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                      <span className="text-xs md:text-sm lg:text-base text-slate-500 line-through">
                        ${product.oldPrice}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      className="relative inline-flex items-center justify-center 
                                  gap-1 sm:gap-2  sm:mt-0
                                  text-gray-700 font-medium 
                                  text-sm md:text-base
                                  border border-gray-300 rounded 
                                  px-3 sm:px-4 py-1.5 sm:py-2
                                  overflow-hidden transition-all duration-500
                                  before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                                  before:bg-gradient-to-r before:from-pink-100 before:to-purple-500 
                                  before:transition-all before:duration-700 
                                  hover:before:w-full hover:text-black 
                                  z-10 before:z-0"
                    >
                      <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 
                                13l-2.293 2.293c-.63.63-.184 1.707.707 
                                1.707H17m0 0a2 2 0 100 4 2 2 0 
                                000-4zm-8 2a2 2 0 11-4 0 2 2 0 
                                014 0z"
                          />
                        </svg>
                        Add
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* _______________________________ */}
        </div>
      </div>
    </div>
  );
};

export default ProductCardMainStore;
