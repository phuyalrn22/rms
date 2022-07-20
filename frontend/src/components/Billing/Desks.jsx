import React from "react";
import { useBilling } from "../../contexts/Billing";

export const Desks = () => {
  const {
    getIndexes: indexes,
    setActiveState: setIndex,
    activeState: activeIndex,
  } = useBilling();
  return indexes.map((x) => (
    <button
      key={x}
      className={`m-3 btn btn-circle  ${
        activeIndex === x ? "btn-primary" : "btn-outline"
      } `}
      onClick={() => setIndex(x)}
    >
      {x}
    </button>
  ));
};
