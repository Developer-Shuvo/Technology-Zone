import React from "react";

const products = [
  {
    id: 1,
    title: "MacBook Pro 14-inch (M2)",
    image:
      "https://i.postimg.cc/qqWgV087/1.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.9,
    price: 1999,
    oldPrice: 2299,
  },
  {
    id: 2,
    title: "Dell XPS 15",
    image:
      "https://i.postimg.cc/J7FsB39W/2.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.7,
    price: 1499,
    oldPrice: 1699,
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max",
    image:
      "https://i.postimg.cc/5NF65YVQ/3.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.8,
    price: 1199,
    oldPrice: 1399,
  },
  {
    id: 4,
    title: "Samsung Galaxy S24 Ultra",
    image:
      "https://i.postimg.cc/g2Vj5CrY/4.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.6,
    price: 1099,
    oldPrice: 1299,
  },
  {
    id: 5,
    title: "Asus ROG Gaming Laptop",
    image:
      "https://i.postimg.cc/VkQ5KffG/5.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.5,
    price: 1799,
    oldPrice: 1999,
  },
  {
    id: 6,
    title: "MSI Optix Gaming Monitor",
    image:
      "https://i.postimg.cc/pdPrtsnK/6.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.4,
    price: 399,
    oldPrice: 499,
  },
  {
    id: 7,
    title: "LG UltraWide Monitor",
    image:
      "https://i.postimg.cc/W3H1gjY7/7.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.7,
    price: 699,
    oldPrice: 849,
  },
  {
    id: 8,
    title: "Logitech MX Master 3 Mouse",
    image:
      "https://i.postimg.cc/SKQ9GSV0/8.jpg?w=300&format=webp&quality=80 ?w=300&format=webp&quality=80",
    rating: 4.8,
    price: 99,
    oldPrice: 129,
  },
  {
    id: 9,
    title: "Razer BlackWidow V3 Keyboard",
    image: "https://i.postimg.cc/wxnhddxJ/9.jpg?w=300&format=webp&quality=80  ",
    rating: 4.6,
    price: 149,
    oldPrice: 179,
  },
  {
    id: 10,
    title: "Corsair K100 RGB Mechanical Keyboard",
    image: "https://i.postimg.cc/tJnCzfLG/10.jpg?w=300&format=webp&quality=80 ",
    rating: 4.9,
    price: 199,
    oldPrice: 229,
  },
  {
    id: 11,
    title: "Sony WH-1000XM5 Headphones",
    image: "https://i.postimg.cc/2j14J5Yr/11.jpg?w=300&format=webp&quality=80 ",
    rating: 4.8,
    price: 349,
    oldPrice: 399,
  },
  {
    id: 12,
    title: "AirPods Pro 2nd Gen",
    image: "https://i.postimg.cc/9QhZrt7Q/12.jpg?w=300&format=webp&quality=80 ",
    rating: 4.7,
    price: 249,
    oldPrice: 299,
  },
  {
    id: 13,
    title: "Anker 737 Power Bank (PowerCore 24K)",
    image: "https://i.postimg.cc/Wbr0Nfty/13.jpg?w=300&format=webp&quality=80 ",
    rating: 4.9,
    price: 149,
    oldPrice: 179,
  },
  {
    id: 14,
    title: "Canon EOS R6 Mark II",
    image: "https://i.postimg.cc/q7m3bPZN/14.jpg?w=300&format=webp&quality=80 ",
    rating: 4.9,
    price: 2499,
    oldPrice: 2699,
  },
  {
    id: 15,
    title: "DJI Mavic Air 2 Drone",
    image: "https://i.postimg.cc/cHr8VFVX/15.jpg?w=300&format=webp&quality=80 ",
    rating: 4.8,
    price: 799,
    oldPrice: 999,
  },
  {
    id: 16,
    title: "Xbox Series X Console",
    image: "https://i.postimg.cc/7Zn77G3M/16.jpg?w=300&format=webp&quality=80 ",
    rating: 4.7,
    price: 499,
    oldPrice: 549,
  },
  {
    id: 17,
    title: "PlayStation 5",
    image: "https://i.postimg.cc/mk91rtZ9/17.jpg?w=300&format=webp&quality=80 ",
    rating: 4.9,
    price: 499,
    oldPrice: 549,
  },
  {
    id: 18,
    title: "Elgato Stream Deck XL",
    image: "https://i.postimg.cc/T3f5Rdzy/18.jpg?w=300&format=webp&quality=80 ",
    rating: 4.7,
    price: 249,
    oldPrice: 299,
  },
  {
    id: 19,
    title: "GoPro HERO10 Black",
    image: "https://i.postimg.cc/jqn7ck6j/19.jpg?w=300&format=webp&quality=80 ",
    rating: 4.6,
    price: 399,
    oldPrice: 499,
  },
  {
    id: 20,
    title: "Apple iPad Pro 12.9” (M2)",
    image: "https://i.postimg.cc/QxpWG9yG/20.jpg?w=300&format=webp&quality=80 ",
    rating: 4.8,
    price: 1099,
    oldPrice: 1249,
  },
];

const Shop = () => {
  return (
    <div className="mt-30 max-w-[1400px] mx-auto px-4">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl px-4 lg:px-2 xl:px-0 text-cyan-900 font-bold text-left flex items-center mb-20">
        Shop Your Favorite Tech Today
        <span className="text-5xl lg:text-6xl xl:text-6xl text-orange-600 font-serif pr-4">
          !
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-14 px-6 lg:px-2 xl:px-0">
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
                  <h5 className="text-sm sm:text-lg font-semibold tracking-tight text-slate-900">
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
                      className={`h-3 w-3 sm:h-4 sm:w-4 ${
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
                  <span className="text-base sm:text-xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-900 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                </p>
                {/* button */}
                <a
                  href="#"
                  className="relative inline-flex items-center text-gray-700 font-semibold text-sm sm:text-lg 
    border border-gray-300 rounded px-2 sm:px-4 py-1 overflow-hidden
    transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
    before:absolute before:top-0 before:left-0 before:h-full before:w-0 
    before:bg-gradient-to-r before:from-pink-100 before:to-purple-500 
    before:transition-all before:duration-[900ms] before:ease-[cubic-bezier(0.25,1,0.5,1)] 
    hover:before:w-full hover:text-black z-10 before:z-0"
                >
                  <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
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
  );
};

export default Shop;
