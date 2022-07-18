import React from "react";

const ProductCard = ({
  product: { id, name, price, imageUrl, description },
}) => {
  return (
    <div key={id} className="card w-96 bg-base-100 shadow-xl h-[28rem]">
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Order {price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
