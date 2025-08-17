import React, { useEffect, useState } from 'react';
import { AllProducts } from '../../AllProducts/AllProducts';
import ProductCardMainStore from '../ProductCardMainStore/ProductCardMainStore';

const Desktop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const desktop = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "desktop"
    );

    setProducts(desktop);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Desktop " products={products} />
    </div>
  );
};

export default Desktop;
