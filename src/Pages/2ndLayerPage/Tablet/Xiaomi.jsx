import { useEffect, useState } from "react";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";
import { AllProducts } from "../../AllProducts/AllProducts";

const Xiaomi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tablet = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "xiaomiTablet"
    );

    setProducts(tablet);
  }, []);

  return <ProductCardMainStore title="Xiaomi" products={products} />;
};

export default Xiaomi;
