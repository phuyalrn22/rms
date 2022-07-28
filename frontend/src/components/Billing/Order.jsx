import React from "react";

const Order = ({
  order: {
    _id,
    productId: { name },
    quantity,
    productId: { price },
  },
}) => (
  <tr key={_id}>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{price}</td>
  </tr>
);

export default Order;
