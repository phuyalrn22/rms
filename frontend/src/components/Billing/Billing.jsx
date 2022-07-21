import React from "react";
import { useBilling } from "../../contexts/Billing";
import { Desks } from "./Desks";
import Orders from "./Orders";

const Billing = () => {
  const { checkOut } = useBilling();
  return (
    <div>
      <Orders />
      <hr />
      <div className="h-[500px] p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-start  flex-wrap">
        <Desks />
        <button onClick={() => checkOut()} className="btn btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Billing;
