import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const DellMonitor = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dellMonitor = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "monitor"
    );

    setProducts(dellMonitor);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Dell Monitor " products={products} />
    </div>
  );
};

export default DellMonitor;