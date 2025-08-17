import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const Printer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const laptop = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "printer"
    );

    setProducts(laptop);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Printer " products={products} />
    </div>
  );
};

export default Printer;
