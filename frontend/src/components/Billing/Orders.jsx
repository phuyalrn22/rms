import React from "react";
import { useBilling } from "../../contexts/Billing";
import Order from "./Order";

const Orders = () => {
  const { orders } = useBilling();
  const getTotalAmount = () =>
    orders
      ? orders.reduce((x, y) => (x += y.productId.price * y.quantity), 0)
      : 0;

  return (
    <div className="h-[500px] max-h-[50vh] overflow-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => <Order key={order._id} order={order} />)}
        </tbody>
      </table>
      <hr />
      <div className="flex justify-between px-5">
        <div>Total</div>
        <div>{orders.length > 0 ? getTotalAmount() : 0}</div>
      </div>
      <hr />
    </div>
  );
};

export default Orders;
