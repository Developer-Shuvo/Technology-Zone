import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";




const SamsungTablet = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tablet = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "tablet"
    );

    setProducts(tablet);
  }, []);

  return <ProductCardMainStore title="Samsung Tablet" products={products} />;
};

export default SamsungTablet;
