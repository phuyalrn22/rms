import React from "react";
import { useProduct } from "../../contexts/Product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useProduct();
  return (
    <div className="col-span-2 flex flex-wrap">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
