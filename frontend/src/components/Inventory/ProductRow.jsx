import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { withOrderHoc } from "../../hoc/orderHoc";

const ProductRow = ({
  addOrder,
  product: { _id, quantity, price, description, imageUrl, name },
}) => {
  const [model, setModel] = useState(false);

  return (
    <tr>
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
              addOrder(_id, data.quantity, data.seatId);
            }}
          >
            {() => (
              <Form>
                {_id}
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
                  <Field
                    type="text"
                    placeholder="seatId?"
                    className="input input-bordered w-full max-w-lg"
                    name="seatId"
                  />
                  <label class="label">
                    <ErrorMessage
                      name="seatId"
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
      <td>{_id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <img src={imageUrl} alt={name} height={80} width={80} />
      </td>
      <td>
        <button onClick={() => setModel(true)}>Add Order</button>
      </td>
    </tr>
  );
};

export default withOrderHoc(ProductRow);
