import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getProduct, postProduct } from "../service/product";
const ProductContext = createContext(undefined);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = async (product) => {
    const res = await postProduct(product);
    product = res.data.product;

    setProducts([...products, product]);
  };
  const updateQuantity = (productId, quantity) => {
    const newProducts = [...products];
    const updatedProduct = newProducts.find((p) => p.id === productId);
    updatedProduct.quantity = updatedProduct.quantity - quantity;
    setProducts(newProducts);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await getProduct();
      setProducts(res.data);
    } catch (err) {}
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
