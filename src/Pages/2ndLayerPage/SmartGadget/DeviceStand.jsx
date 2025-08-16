import { useEffect, useState } from "react";
import { AllProducts } from "../../AllProducts/AllProducts";
import ProductCardMainStore from "../ProductCardMainStore/ProductCardMainStore";

const DeviceStand = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const deviceStand = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart gadget"
    );

    setProducts(deviceStand);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Device Stand " products={products} />
    </div>
  );
};

export default DeviceStand;