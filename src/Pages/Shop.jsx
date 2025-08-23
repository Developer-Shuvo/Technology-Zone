import { useEffect, useState } from "react";
import { AllProducts } from "./AllProducts/AllProducts";
import ProductCardMainStore from "./2ndLayerPage/ProductCardMainStore/ProductCardMainStore";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [showAll, setShowAll] = useState(false);

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

  const handleViewMore = () => {
    setShowAll(true);
    setVisibleCount(products.length); // show all products
  };

    return (
    <div className="max-w-[1300px] mx-auto px-4 py-8">
      {/* Product Cards */}
      <ProductCardMainStore
        title="All Products"
        products={products.slice(0, visibleCount)}
        hideSidebar={true}
        isHomePage={true}   // ✅ This makes it full-width + 5 columns
      />

      {/* View All Products Button */}
      {!showAll && products.length > visibleCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="bg-[#C4E1E6] text-base font-semibold py-2 px-6
          text-gray-700 rounded-lg transition transform ease-in-out duration-700 
          hover:bg-[#8DBCC7] hover:scale-105"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
