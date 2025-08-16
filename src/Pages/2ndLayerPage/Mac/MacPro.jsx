import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const MacPro = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tablet = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "macPro"
    );

    setProducts(tablet);
  }, []);

  return <ProductCardMainStore title="Mac Pro" products={products} />;
};

export default MacPro;
