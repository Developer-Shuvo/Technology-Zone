import { useEffect, useState } from "react";
import { AllProducts } from "./AllProducts/AllProducts";
import ProductCardMainStore from "./2ndLayerPage/ProductCardMainStore/ProductCardMainStore";

import {motion} from "framer-motion"

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    const allCategories = [
      "smartPhone",
      "featuredPhone",
      "laptop",
      "smart watch",
      "tablet",
      "mac",
      "accessories",
      "soundbox",
      "smart gadget",
      "monitor",
      "macPro",
      "gamingPc",
      "iMac",
      "xiaomiTablet",
      "iPad",
      "desktop",
      "headphone",
      "printer",
      "scanner",
    ];

    const allProducts = AllProducts.filter((singleProduct) =>
      allCategories.includes(singleProduct?.categories)
    );

    setProducts(allProducts);
  }, []);

  // ✅ Load more 20 each click
  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 20, products.length));
  };

  return (
    <motion.div
          whileInView={{ opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
    className="max-w-[1400px] mx-auto lg:px-3 xl:px-4 mt-4 ">
      {/* Product Cards */}
      <ProductCardMainStore
        title="All Products"
        products={products.slice(0, visibleCount)}
        hideSidebar={true}
        isHomePage={true} // ✅ This makes it full-width + 5 columns
      />

      {/* View More Products Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-6 ">
          <button
            onClick={handleViewMore}
            className="relative inline-flex h-12 sm:h-10 md:h-12 lg:h-14 overflow-hidden rounded
             p-[3px] focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-white"
          >
            {/* Gradient Border */}
            <span
              className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] 
                    bg-[conic-gradient(from_90deg_at_50%_50%,#84cc16_0%,#f97316_50%,#84cc16_100%)]"
            />

            {/* Inner Content */}
            <motion.span

              className="inline-flex h-full w-full items-center justify-center rounded 
                px-6 sm:px-4 md:px-8 lg:px-10
                py-1 text-sm sm:text-xs md:text-base lg:text-lg
                font-semibold text-gray-900 bg-white
               hover:bg-gray-950 hover:text-gray-200 transition-colors duration-300
                backdrop-blur-3xl"
            >
              View More Products
            </motion.span>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Shop;
