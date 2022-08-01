import React from "react";

const Order = ({
  addOrder,
  order: {
    _id,
    productId: { name },
    quantity,
    productId: { price },
  },
}) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{price}</td>
  </tr>
);

export default Order;
