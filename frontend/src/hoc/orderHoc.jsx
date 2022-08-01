import { useBilling } from "../contexts/Billing";

export const withOrderHoc = (Components) => (props) => {
  const { addOrder: saveOrder } = useBilling();
  const addOrder = (productId, quantity, seatId) => {
    saveOrder(productId, quantity, seatId);
  };
  return <Components addOrder={addOrder} {...props} />;
};
