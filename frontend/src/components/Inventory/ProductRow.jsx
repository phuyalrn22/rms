import React from "react";

const ProductRow = ({
  product: { id, quantity, price, description, imageUrl, name },
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <img src={imageUrl} alt={name} height={80} width={80} />
      </td>
    </tr>
  );
};

export default ProductRow;
