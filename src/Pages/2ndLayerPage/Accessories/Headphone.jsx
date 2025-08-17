import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const Headphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const headphone = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "headphone"
    );

    setProducts(headphone);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Headphone " products={products} />
    </div>
  );
};

export default Headphone;