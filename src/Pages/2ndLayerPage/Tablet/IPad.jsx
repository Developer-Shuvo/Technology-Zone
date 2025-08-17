import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";



const AppleTablet = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const tablet = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "iPad"
    );

    setProducts(tablet);
  }, []);

  return <ProductCardMainStore title="i Pad" products={products} />;
};

export default AppleTablet;
