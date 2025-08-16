import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";



const Lenovo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const laptop = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "laptop"
    );

    setProducts(laptop);
  }, []);

  return (
    <div>
      <ProductCardMainStore title="Lenovo Laptop" products={products} />
    </div>
  );
};

export default Lenovo;
