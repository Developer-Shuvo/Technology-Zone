import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const FeaturedPhone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const monitor = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "featuredPhone"
    );

    setProducts(monitor);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Featured Phone " products={products} />
    </div>
  );
};

export default FeaturedPhone;
