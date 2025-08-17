import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const AppleWatch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const appleWatch = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart watch"
    );

    setProducts(appleWatch);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Apple Watch " products={products} />
    </div>
  );
};

export default AppleWatch;