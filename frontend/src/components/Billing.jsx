import React from "react";
import { Desks } from "./Desks";

const Billing = () => {
  return (
    <div>
      <div className="h-[500px]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pizza</td>
              <td>1</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Pizza</td>
              <td>1</td>
              <td>500</td>
            </tr>{" "}
            <tr>
              <td>Pizza</td>
              <td>1</td>
              <td>500</td>
            </tr>{" "}
            <tr>
              <td>Pizza</td>
              <td>1</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="flex justify-between px-5">
          <div>Total</div>
          <div>2000</div>
        </div>
        <hr />
      </div>
      <hr />
      <div className="h-[500px] p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-start  flex-wrap">
        <Desks />
      </div>
    </div>
  );
};

export default Billing;
