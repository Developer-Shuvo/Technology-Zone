import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";


const AllPhone = () => {
  //Multiple Categories Added
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allCategories = ["smartPhone", "featuredPhone", "anotherCategory"];

    const allPhone = AllProducts.filter((singleProduct) =>
      allCategories.includes(singleProduct?.categories)
    );

    setProducts(allPhone);
  }, []);

  //Multiple Categories Added

  return (
    <div>
      <ProductCardMainStore title=" All Phone " products={products} />
    </div>
  );
};

export default AllPhone;
