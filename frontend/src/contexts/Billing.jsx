import React, { createContext, useContext, useState } from "react";
import { useProduct } from "./Product";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "./Toast";

const BillingContext = createContext(undefined);
const BillingProvider = ({ children }) => {
  const { products, updateQuantity } = useProduct();
  const { addToast } = useToast();
  const [desks, setDesks] = useState({
    1: {
      orders: [],
    },
    2: {
      orders: [],
    },
    3: { orders: [] },
    4: { orders: [] },
    5: { orders: [] },
    6: { orders: [] },
    7: { orders: [] },
    8: { orders: [] },
    9: { orders: [] },
    10: { orders: [] },
  });
  const [activeState, setActiveState] = useState("1");
  const getIndexes = (() => {
    return Object.keys(desks);
  })();
  const getActiveOrder = (() => desks[activeState].orders)();
  const addOrder = (productId, quantity) => {
    const id = uuidv4();
    const selectedProduct = products.find((p) => p.id === productId);
    if (selectedProduct.quantity >= quantity) {
      const newDesks = { ...desks };
      newDesks[activeState].orders.push({
        id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: quantity,
      });
      updateQuantity(productId, quantity);
      setDesks(newDesks);
    } else {
      addToast({ type: "error", message: "Out of order" });
    }
  };
  return (
    <BillingContext.Provider
      value={{
        setActiveState,
        activeState,
        getIndexes,
        getActiveOrder,
        addOrder,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;

export const useBilling = () => useContext(BillingContext);
