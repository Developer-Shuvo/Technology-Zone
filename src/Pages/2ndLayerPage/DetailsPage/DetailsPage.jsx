import React, { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import { useParams } from "react-router";
import review from "../../../assets/images/favicon/review.png";
import shareItem from "../../../assets/images/social-icons/social-media.png";

// ____________________________________________________
// export async function detailsLoader({ params }) {
//   const res = await fetch(`/api/products/${params.id}`);
//   if (!res.ok) {
//     throw new Response("Product not found", { status: 404 });
//   }
//   const product = await res.json();
//   return product; // this becomes useLoaderData() result
// }

const DetailsPage = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(5);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Set product details dynamically
  const [product, setProduct] = useState(null);

  console.log(id);

  useEffect(() => {
    const details = AllProducts.find(
      (singleProduct) => String(singleProduct?.id) === String(id)
    );

    setProduct(details);
  }, [id]);

  console.log(product, "singleProduct");
  // Set product details dynamically
  return (
    <>
      <section class="font-['Poppins'] flex items-center bg-[#5ca4b8a6] justify-center bg-opacity-20 pt-10 pb-30">
        <div class="flex w-[1300px] p-10 bg-white  rounded-xl shadow-2xl">
          {/* Product Image */}
          <img
            class="w-[600px] h-[450px] ml-3 mr-6 rounded-xl  object-contain"
            src={product?.image}
            alt=""
          />

          {/*_____________ Text Section____________ */}
          <div className="border-l-2 border-green-800 pl-4 ">
            {/* Product Title */}
            <div class="flex gap-2 items-center ">
              <h1 class="text-5xl font-semibold text-black">
                {product?.title}
              </h1>
              <span class="text-sm text-green-800 px-2 py-1 bg-[#8bcbe868] bg-opacity-20 shadow-lg">
                In Stock
              </span>
            </div>

            {/* Rating Section */}
            <div className="flex items-center mt-3 text-sm leading-[1.5]">
              {/* Review Image + Rating */}
              <div className="flex items-center gap-2">
                <img
                  src={review}
                  alt="Review"
                  className="w-18 h-18 object-contain"
                />
                <span className="text-[#038007] text-lg font-semibold">
                  Rating: {product?.rating}
                </span>
              </div>

              {/* SKU */}
              <div className="flex items-center gap-2 ml-8">
                <span className="font-medium text-gray-800">SKU:</span>
                <span className="text-gray-600">2,51,594</span>
              </div>
            </div>

            {/* Price Section */}
            <div class="h-9 mt-5 justify-start items-center gap-6 flex ">
              <div class="justify-start items-center gap-1 flex">
                <div class="text-[#b3b3b3] text-xl font-normal line-through leading-[30px]">
                  {product?.oldPrice}
                </div>
                <div class="text-[#2c732f] text-2xl font-medium leading-9">
                  {product?.price} $
                </div>
              </div>
              <div class="px-2.5 py-[3px] bg-[#e94b48]/10 rounded-[30px] text-[#e94b48] text-sm font-medium leading-[21px]">
                64% Off
              </div>
            </div>

            {/* Brand section */}
            <div class="h-22 flex w-full justify-between items-center">
              <div class="justify-start items-center gap-2 flex">
                <span class="text-[#191919] text-lg font-semibold leading-[21px]">
                  Brand:
                </span>
              </div>
              <div class="justify-start items-center gap-2.5 flex">
                <h2 class="text-[#191919] text-lg font-semibold leading-[21px]">
                  Share item:
                </h2>

                {/* Social Icons */}
                <img
                  className="h-16 w-16 hover:ease-in-out transition transform hover:scale-125 duration-500 "
                  src={shareItem}
                  alt="social-share"
                />
              </div>
            </div>

            {/*_________ Description_________ */}
            <p class="w-[500px] text-justify text-[#535252] text-lg font-normal mt-4 leading-[24px]">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
            <div
              className="h-[88px] mt-20 py-[18px] 
               items-center gap-3 flex "
            >
              {/* Quantity Selector */}
              <div className="p-2 bg-white rounded-full border border-neutral-200 justify-center items-center flex">
                {/* Decrease */}
                <button
                  onClick={decrease}
                  className="w-[34px] h-[34px] flex items-center justify-center hover:bg-yellow-300 
                  rounded-full ease-in-out duration-500"
                >
                  <svg
                    width="14"
                    height="14"
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

                {/* Quantity */}
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-10 text-center text-[#191919] text-base font-normal leading-normal focus:outline-none"
                />

                {/* Increase */}
                <button
                  onClick={increase}
                  className="w-[34px] h-[34px] flex items-center justify-center hover:bg-lime-200 ease-in-out duration-500 rounded-full"
                >
                  <svg
                    width="14"
                    height="14"
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
              <button className="h-[51px] px-8 bg-[#00b206] rounded-[43px] justify-center items-center gap-3 flex hover:bg-green-600 transition">
                <span className="text-white text-base font-semibold leading-tight">
                  Add to Cart
                </span>
                <svg
                  width="17"
                  height="18"
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
                  width="52"
                  height="52"
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
    </>
  );
};

export default DetailsPage;
