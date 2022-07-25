import React, { createContext, useContext, useMemo, useState } from "react";
import { useProduct } from "./Product";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "./Toast";
const BillingContext = createContext(undefined);
const BillingProvider = ({ children }) => {
  const { products, updateQuantity } = useProduct();
  const { addToast } = useToast();

  const [desks, setDesks] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  });
  const [activeState, setActiveState] = useState("1");

  const getIndexes = (() => {
    return Object.keys(desks);
  })();
  const getActiveOrder = 
    (() =>
     desks[activeState].find((order) => order.status === 0)
        ? desks[activeState].find((order) => order.status === 0).orders
        : undefined
  )();

  const addOrder = (productId, quantity) => {
    const id = uuidv4();
    const selectedProduct = products.find((p) => p.id === productId);
    if (selectedProduct.quantity >= quantity) {
      const newDesks = { ...desks };
      if (getActiveOrder) {
        newDesks[activeState]
          .find((order) => order.status === 0)
          .orders.push({
            id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: quantity,
          });
      } else {
        newDesks[activeState].push({
          status: 0,
          orders: [
            {
              id,
              name: selectedProduct.name,
              price: selectedProduct.price,
              quantity: quantity,
            },
          ],
        });
      }

      updateQuantity(productId, quantity);
      setDesks(newDesks);
    } else {
      addToast({ type: "error", message: "Out of order" });
    }
  };
  const checkOut = () => {
    const newDesks = { ...desks };
    if (getActiveOrder) {
      newDesks[activeState].find((order) => order.status === 0).status = 1;
      setDesks(newDesks);
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
        checkOut,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;

export const useBilling = () => useContext(BillingContext);
