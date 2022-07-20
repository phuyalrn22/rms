import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ProductContext = createContext(undefined);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const id = uuidv4();
    product.id = id;
    setProducts([...products, product]);
  };
  const updateQuantity = (productId, quantity) => {
    const newProducts = [...products];
    const updatedProduct = newProducts.find((p) => p.id === productId);
    updatedProduct.quantity = updatedProduct.quantity - quantity;
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(ProductContext);
