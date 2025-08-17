import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const SmartPhone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const monitor = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smartPhone"
    );

    setProducts(monitor);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Smart Phone " products={products} />
    </div>
  );
};

export default SmartPhone;