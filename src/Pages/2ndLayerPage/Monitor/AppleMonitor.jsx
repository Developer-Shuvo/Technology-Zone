import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const AppleMonitor = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const monitor = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "monitor"
    );

    setProducts(monitor);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Apple Monitor " products={products} />
    </div>
  );
};

export default AppleMonitor;