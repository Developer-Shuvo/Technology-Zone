import React, { useEffect, useState } from 'react';
import { AllProducts } from '../../AllProducts/AllProducts';
import ProductCardMainStore from '../ProductCardMainStore/ProductCardMainStore';

const Accessories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const laptop = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "accessories"
    );

    setProducts(laptop);
  }, []);

  return (
    <div>
      <ProductCardMainStore title=" Accessories " products={products} />
    </div>
  );
};

export default Accessories;