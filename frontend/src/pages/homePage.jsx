import React from "react";
import Billing from "../components/Billing/Billing";
import ProductList from "../components/Products/ProductList";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <Billing />
        <ProductList />
      </div>
    </>
  );
};

export default Homepage;
