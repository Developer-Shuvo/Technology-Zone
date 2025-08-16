import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";


const IMac = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tablet = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "mac"
    );

    setProducts(tablet);
  }, []);

  return <ProductCardMainStore title="i Mac" products={products} />;
};

export default IMac;
