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
import { getOrder, getSeat } from "../service/seat";
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

  const addOrder = (productId, quantity) => {
    const id = uuidv4();
    const selectedProduct = products.find((p) => p.id === productId);
    if (selectedProduct.quantity >= quantity) {
      const newDesks = { ...desks };
      // if (getActiveOrder) {
      //   newDesks[activeState]
      //     .find((order) => order.status === 0)
      //     .orders.push({
      //       id,
      //       name: selectedProduct.name,
      //       price: selectedProduct.price,
      //       quantity: quantity,
      //     });
      // } else {
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
      // }

      updateQuantity(productId, quantity);
      setDesks(newDesks);
    } else {
      addToast({ type: "error", message: "Out of order" });
    }
  };

  const checkOut = () => {
    const newDesks = { ...desks };
    // if (getActiveOrder) {
    newDesks[activeState].find((order) => order.status === 0).status = 1;
    setDesks(newDesks);
    // }
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
