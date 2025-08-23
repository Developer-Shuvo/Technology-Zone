import { useEffect, useState } from "react";
import { AllProducts } from "./AllProducts/AllProducts";
import ProductCardMainStore from "./2ndLayerPage/ProductCardMainStore/ProductCardMainStore";

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
    <div className="max-w-[1400px] mx-auto lg:px-3 xl:px-4 mt-4 ">
      {/* Product Cards */}
      <ProductCardMainStore
        title="All Products"
        products={products.slice(0, visibleCount)}
        hideSidebar={true}
        isHomePage={true} // ✅ This makes it full-width + 5 columns
      />

      {/* View More Products Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleViewMore}
            className="bg-[#C4E1E6] text-base font-semibold py-2 px-4
          text-gray-700 rounded transition transform ease-in-out duration-700 
          hover:bg-[#94ccd8] hover:scale-105"
          >
            View More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
