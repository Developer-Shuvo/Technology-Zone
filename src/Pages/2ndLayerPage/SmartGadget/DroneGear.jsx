import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const DroneGear = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const droneGear = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart gadget"
    );

    setProducts(droneGear);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Drone " products={products} />
    </div>
  );
};

export default DroneGear;