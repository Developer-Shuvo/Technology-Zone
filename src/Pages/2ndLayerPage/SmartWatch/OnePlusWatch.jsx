import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const OnePlusWatch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const onePlusWatch = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart watch"
    );

    setProducts(onePlusWatch);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" One Plus Watch " products={products} />
    </div>
  );
};

export default OnePlusWatch;