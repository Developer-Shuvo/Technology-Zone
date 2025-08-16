import React, { useEffect, useState } from 'react';
import { AllProducts } from '../../AllProducts/AllProducts';
import ProductCardMainStore from '../ProductCardMainStore/ProductCardMainStore';

const SmartGadget = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const laptop = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart gadget"
    );

    setProducts(laptop);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Smart Gadget " products={products} />
    </div>
  );
};

export default SmartGadget;