import React from "react";
import { useBilling } from "../../contexts/Billing";

export const Desks = () => {
  const {
    desks,
    setActiveState: setIndex,
    activeState: activeIndex,
  } = useBilling();
  return (
    desks &&
    desks.map((x) => (
      <button
        key={x._id}
        className={`m-3 btn btn-circle  ${
          activeIndex === x._id ? "btn-primary" : "btn-outline"
        } `}
        onClick={() => setIndex(x._id)}
      >
        {x.label}
      </button>
    ))
  );
};
