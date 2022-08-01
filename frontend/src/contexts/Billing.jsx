import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useProduct } from "./Product";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "./Toast";
import {
  addOrder as addOrderService,
  checkOutOrder,
  getOrder,
  getSeat,
} from "../service/seat";
const BillingContext = createContext(undefined);
const BillingProvider = ({ children }) => {
  const { products, updateQuantity } = useProduct();
  const { addToast } = useToast();

  const [desks, setDesks] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchSeats();
  }, []);

  const [activeState, setActiveState] = useState();
  const fetchSeats = async () => {
    try {
      const res = await getSeat();
      const array = res.data.sort((a, b) => a.label - b.label);
      setDesks(array);
      setActiveState(array[0]._id);
    } catch (err) {}
  };

  useEffect(() => {
    if (activeState) {
      fetchOrder();
    }
  }, [activeState]);
  const fetchOrder = async () => {
    try {
      const res = await getOrder(activeState);
      setOrders(res.data);
    } catch (err) {}
  };

  const addOrder = async (productId, quantity, seatId = activeState) => {
    const selectedProduct = products.find((p) => p._id === productId);
    if (selectedProduct.quantity >= quantity) {
      const res = await addOrderService(seatId, productId, quantity);
      const order = res.data;
      const newOrders = [...orders];
      newOrders.push(order);
      setOrders(newOrders);
      updateQuantity(productId, quantity);
    } else {
      addToast({ type: "error", message: "Out of order" });
    }
  };

  const checkOut = async () => {
    await checkOutOrder(activeState);
    setOrders([]);
  };

  return (
    <BillingContext.Provider
      value={{
        setActiveState,
        activeState,
        addOrder,
        orders,
        checkOut,
        desks,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;

export const useBilling = () => useContext(BillingContext);
