import React, { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import Sidebar from "../Phone/Sidebar/Sidebar";

const Tablet = () => {
  //Javascript here

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tablet = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "tablet"
    );

    setProducts(tablet);
  }, []);

  return (
    <div className="mt-20 mb-40 max-w-[1400px] mx-auto px-4">
      <div className="flex w-full">
        {/*___________ Sidebar___________ */}
        <div className="w-[30%] min-w-[220px] max-w-[350px] mr-6">
          <Sidebar />
        </div>

        {/*_________________ Card Section __________________ */}
        <div className="w-[70%] flex-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl px-4 lg:px-2 xl:px-0 text-cyan-900 font-bold text-left flex items-center mb-8">
            Tablet
            <span className="text-5xl lg:text-6xl xl:text-6xl text-orange-600 font-serif pr-4">
              !
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14 px-6 lg:px-2 xl:px-0">
            {products.map((product) => (
              // Cards here *****
              <div
                key={product.id}
                className="relative w-full overflow-hidden rounded-lg bg-white shadow-md flex-col flex
           hover:shadow-lg hover:shadow-[#A4CCD9] transition transform ease-in-out duration-500 "
              >
                <div className="relative overflow-hidden">
                  <a href="#">
                    <img
                      className="h-[192px] w-full object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-125"
                      src={product.image}
                      alt="product image"
                    />
                  </a>
                  <span className="absolute top-0 left-0 w-24 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                    Sale
                  </span>
                </div>

                <div className="flex flex-col justify-between flex-grow px-4 pb-5 pt-4">
                  <div>
                    <a href="#">
                      <h5 className="text-lg font-semibold tracking-tight text-slate-900">
                        {product.title}
                      </h5>
                    </a>

                    <div className="mt-2.5 mb-4 flex items-center">
                      <span className="mr-2 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold">
                        {product.rating}
                      </span>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(product.rating)
                              ? "text-yellow-300"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <p>
                      <span className="text-xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                      <span className="text-sm text-slate-900 line-through ml-2">
                        ${product.oldPrice}
                      </span>
                    </p>
                    {/* button */}
                    <a
                      href="#"
                      className="relative inline-flex items-center text-gray-700 font-semibold text-lg 
    border border-gray-300 rounded px-4 py-1 overflow-hidden
    transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
    before:absolute before:top-0 before:left-0 before:h-full before:w-0 
    before:bg-gradient-to-r before:from-pink-100 before:to-purple-500 
    before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] 
    hover:before:w-full hover:text-black z-10 before:z-0"
                    >
                      <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Add
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="#">
            <button
              className="bg-[#C4E1E6] text-base font-semibold py-2 px-4
         text-gray-700 rounded-lg mt-12 transition transform 
         ease-in-out duration-700 hover:bg-[#8DBCC7]"
            >
              View More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tablet;
