import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useBilling } from "../../contexts/Billing";

const ProductCard = ({
  product: { id, name, price, imageUrl, description },
}) => {
  const [model, setModel] = useState(false);
  const { addOrder } = useBilling();
  return (
    <div key={id} className="card w-96 bg-base-100 shadow-xl h-[28rem]">
      <input
        checked={model}
        onChange={() => setModel(false)}
        type="checkbox"
        id="ad_product_model"
        className="modal-toggle !block "
      />
      <div className="modal">
        <div className="modal-box relative">
          <button
            onClick={() => setModel(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          {/* Add Order*/}
          <Formik
            initialValues={{ quantity: 1 }}
            onSubmit={(data) => {
              addOrder(id, data.quantity);
            }}
          >
            {() => (
              <Form>
                <div className="form-control w-full max-w-lg">
                  <label className="label">
                    <span className="label-text-alt">Quantity</span>
                  </label>
                  <Field
                    type="number"
                    placeholder="quantity?"
                    className="input input-bordered w-full max-w-lg"
                    name="quantity"
                  />
                  <label class="label">
                    <ErrorMessage
                      name="quantity"
                      component="span"
                      className="label-text-alt text-error"
                    />
                  </label>
                </div>

                <button type="submit" className="mt-4 btn btn-primary">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          {/* add Order end */}
        </div>
      </div>
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={() => setModel(true)}>
            Order {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
