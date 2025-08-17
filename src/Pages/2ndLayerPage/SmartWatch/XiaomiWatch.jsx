import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const XiaomiWatch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const xiaomiWatch = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart watch"
    );

    setProducts(xiaomiWatch);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Xiaomi Watch " products={products} />
    </div>
  );
};

export default XiaomiWatch;