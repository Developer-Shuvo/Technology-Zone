import React, { useEffect, useState } from 'react';
import { AllProducts } from '../../AllProducts/AllProducts';
import ProductCardMainStore from '../ProductCardMainStore/ProductCardMainStore';

const Laptop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const laptop = AllProducts.filter(
      (singleProduct) => singleProduct?.categories === "laptop"
    );

    setProducts(laptop);
  }, []);

  return (
    <div>
      <ProductCardMainStore title="Laptop" products={products} />
    </div>
  );
};

export default Laptop;