import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const productValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required().min(3).label("Name"),
  imageUrl: Yup.string().trim().required().label("imageUrl"),
  price: Yup.number().min(10).label("Price"),
  quantity: Yup.number().min(1).label("quantity"),
  description: Yup.string().required().trim().min(3).label("Description"),
});

const AddProduct = ({ addProduct }) => {
  return (
    <div>
      <Formik
        onSubmit={(data, { resetForm }) => {
          addProduct(data);
          resetForm();
        }}
        validationSchema={productValidationSchema}
        initialValues={{
          name: "",
          imageUrl: "",
          price: 0,
          quantity: 0,
          description: "",
        }}
      >
        {({ values, handleChange }) => (
          <>
            <Form>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text-alt">Name</span>
                </label>
                <Field
                  type="text"
                  placeholder="Name of Food"
                  className="input input-bordered w-full max-w-lg"
                  name="name"
                />
                <label class="label">
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="label-text-alt text-error"
                  />
                </label>
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text-alt">Image Url</span>
                </label>
                <Field
                  type="text"
                  placeholder="https://"
                  name="imageUrl"
                  className="input input-bordered w-full max-w-lg"
                />
                <label class="label">
                  <ErrorMessage
                    name="imageUrl"
                    component="span"
                    className="label-text-alt text-error"
                  />
                </label>
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text-alt">Description</span>
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="textarea input input-bordered w-full max-w-lg h-20"
                  placeholder="Bio"
                  rows={4}
                ></Field>
                <label class="label">
                  <ErrorMessage
                    name="description"
                    component="span"
                    className="label-text-alt text-error"
                  />
                </label>
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text-alt">Price</span>
                </label>
                <Field
                  name="price"
                  type="number"
                  placeholder="Price of food"
                  className="input input-bordered w-full max-w-lg"
                />
                <label class="label">
                  <ErrorMessage
                    name="price"
                    component="span"
                    className="label-text-alt text-error"
                  />
                </label>
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text-alt">Quantity</span>
                </label>
                <Field
                  name="quantity"
                  type="number"
                  placeholder="Quantity of food"
                  className="input input-bordered w-full max-w-lg"
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
          </>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
