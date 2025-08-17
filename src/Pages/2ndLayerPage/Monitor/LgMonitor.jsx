import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const LgMonitor = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const lgMonitor = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "monitor"
    );

    setProducts(lgMonitor);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" LG Monitor " products={products} />
    </div>
  );
};

export default LgMonitor;