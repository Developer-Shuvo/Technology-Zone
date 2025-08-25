import React, { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import { useParams } from "react-router";
import review from "../../../assets/images/favicon/review.png";
import shareItem from "../../../assets/images/social-icons/social-media.png";

const DetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const details = AllProducts.find(
      (singleProduct) => String(singleProduct?.id) === String(id)
    );
    setProduct(details);
  }, [id]);

  return (
    <section className="font-['Poppins'] flex items-center bg-[#5ca4b8a6] justify-center bg-opacity-20 pt-20 sm:pt-30 md:pt-52 lg:pt-42 xl:pt-46 pb-30">
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] p-5 md:p-10 bg-white rounded-xl shadow-2xl">
        {/* Product Image */}
        <img
          className="
                    w-[600px] h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[500px]
                    object-contain rounded-xl
                    mb-4 md:mb-6 lg:mb-0 mr-4
                  "
          src={product?.image}
          alt={product?.title || "Product Image"}
        />

        {/* Text Section */}
        <div className="border-t-2 lg:border-t-0 lg:border-l-2 border-green-800 pt-4 lg:pt-0 lg:pl-4 flex-1">
          {/* Product Title */}
          <div className="flex flex-wrap gap-2 items-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black">
              {product?.title}
            </h1>
            <span className="text-xs md:text-sm text-green-800 px-2 py-1 bg-[#8bcbe868] bg-opacity-20 shadow-lg">
              In Stock
            </span>
          </div>

          {/* Rating Section */}
          <div className="flex flex-wrap items-center mt-3 text-sm leading-[1.5] gap-4">
            <div className="flex items-center gap-2">
              <img
                src={review}
                alt="Review"
                className="w-12 h-12 object-contain"
              />
              <span className="text-[#038007] text-base md:text-lg font-semibold">
                Rating: {product?.rating}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800">SKU:</span>
              <span className="text-gray-600">2,51,594</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex flex-wrap gap-3 items-center mt-5">
            <div className="flex items-center gap-2">
              <div className="text-[#b3b3b3] text-lg md:text-xl font-normal line-through">
                {product?.oldPrice}
              </div>
              <div className="text-[#2c732f] text-xl md:text-2xl font-medium">
                {product?.price} $
              </div>
            </div>
            <div className="px-2.5 py-1 bg-[#e94b48]/10 rounded-[30px] text-[#e94b48] text-xs md:text-sm font-medium">
              64% Off
            </div>
          </div>

          {/* Brand section */}
          <div className="flex flex-wrap justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <span className="text-[#191919] text-base md:text-lg font-semibold">
                Brand:
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-[#191919] text-base md:text-lg font-semibold">
                Share item:
              </h2>
              <img
                className="h-10 w-10 md:h-16 md:w-16 hover:ease-in-out transition transform hover:scale-125 duration-500"
                src={shareItem}
                alt="social-share"
              />
            </div>
          </div>

          {/* Description */}
          <p className="w-full lg:w-[500px] text-justify text-[#535252] text-sm md:text-base lg:text-lg mt-4 leading-relaxed">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>

          {/* Quantity + Cart */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-20">
            {/* Quantity Selector */}
            <div className="p-1.5 sm:p-2 bg-white rounded-full border border-neutral-200 flex items-center">
              <button
                onClick={decrease}
                className="w-8 h-8 sm:w-[34px] sm:h-[34px] flex items-center justify-center hover:bg-yellow-300 rounded-full ease-in-out duration-500"
              >
                <svg
                  width="12"
                  height="12"
                  className="sm:w-[14px] sm:h-[14px]"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33398 7H11.6673"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-8 sm:w-10 text-center text-[#191919] text-sm sm:text-base font-normal focus:outline-none"
              />
              <button
                onClick={increase}
                className="w-8 h-8 sm:w-[34px] sm:h-[34px] flex items-center justify-center hover:bg-lime-200 rounded-full ease-in-out duration-500"
              >
                <svg
                  width="12"
                  height="12"
                  className="sm:w-[14px] sm:h-[14px]"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33398 6.99998H11.6673M7.00065 2.33331V11.6666V2.33331Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="h-[44px] sm:h-[51px] px-4 sm:px-6 md:px-8 bg-[#00b206] rounded-[43px] flex items-center gap-2 md:gap-3 hover:bg-green-600 transition">
              <span className="text-white text-sm md:text-base font-semibold">
                Add to Cart
              </span>
              <svg
                width="15"
                height="16"
                className="sm:w-[17px] sm:h-[18px]"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.16667 7.33333H2.66667L1 16.5H16L14.3333 7.33333H11.8333M5.16667 7.33333V4.83333C5.16667 2.99239 6.65905 1.5 8.5 1.5V1.5C10.3409 1.5 11.8333 2.99238 11.8333 4.83333V7.33333M5.16667 7.33333H11.8333M5.16667 7.33333V9.83333M11.8333 7.33333V9.83333"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Wishlist Heart */}
            <div className="cursor-pointer">
              <svg
                width="42"
                height="42"
                className="sm:w-[52px] sm:h-[52px]"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="52"
                  height="52"
                  rx="26"
                  fill="#20B526"
                  fillOpacity="0.1"
                ></rect>
                <path
                  d="M25.9996 33.5451C9.33328 24.3334 20.9999 14.3334 25.9996 20.6567C30.9999 14.3334 42.6666 24.3334 25.9996 33.5451Z"
                  stroke="#2C742F"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
