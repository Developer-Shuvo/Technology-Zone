import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const ActionCamera = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const actionCamera = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart gadget"
    );

    setProducts(actionCamera);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Action Camera " products={products} />
    </div>
  );
};

export default ActionCamera;