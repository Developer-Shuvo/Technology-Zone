import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";


const Apple = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const laptop = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "laptop"
    );

    setProducts(laptop);
  }, []);

  return (
    <div>
      <ProductCardMainStore title="Apple Laptop" products={products} />
    </div>
  );
};

export default Apple;
