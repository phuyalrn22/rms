import React from "react";

const Order = ({ order: { id, name, quantity, price } }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{price}</td>
  </tr>
);

export default Order;
