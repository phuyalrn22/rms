import React from "react";

export const Desks = ({ indexes, setIndex, activeIndex }) => {
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
