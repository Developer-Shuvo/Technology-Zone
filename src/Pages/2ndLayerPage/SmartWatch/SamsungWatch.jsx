import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const SamsungWatch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const samsungWatch = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart watch"
    );

    setProducts(samsungWatch);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Samsung Watch " products={products} />
    </div>
  );
};

export default SamsungWatch;