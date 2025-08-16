import React, { useEffect, useState } from 'react';
import { AllProducts } from '../../AllProducts/AllProducts';
import ProductCardMainStore from '../ProductCardMainStore/ProductCardMainStore';

const SmartWatch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const smartWatch = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "smart watch"
    );

    setProducts(smartWatch);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Smart Watch " products={products} />
    </div>
  );
};

export default SmartWatch;