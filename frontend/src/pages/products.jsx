import React, { useState } from "react";
import { useProduct } from "../contexts/Product";
import AddProduct from "../components/Inventory/AddProduct";
import ProductRow from "../components/Inventory/ProductRow";
const Products = () => {
  const { products, addProduct } = useProduct();

  const [model, setModal] = useState(false);

  return (
    <div className="h-screen w-screen ">
      <input
        checked={model}
        onChange={() => setModal(true)}
        type="checkbox"
        id="ad_product_model"
        className="modal-toggle !block "
      />
      <div className="modal">
        <div className="modal-box relative">
          <button
            onClick={() => setModal(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <AddProduct addProduct={addProduct} />
        </div>
      </div>
      <div className="flex justify-end mx-3 my-4">
        <button onClick={() => setModal(true)} className="btn modal-button">
          Add Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
