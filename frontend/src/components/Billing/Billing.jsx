import React from "react";
import { Desks } from "./Desks";
import Orders from "./Orders";

const Billing = () => {
  return (
    <div>
      <Orders />
      <hr />
      <div className="h-[500px] p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-start  flex-wrap">
        <Desks />
      </div>
    </div>
  );
};

export default Billing;
