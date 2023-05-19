import React from "react";
import { useState } from "react";

const Counter = () => {
  let [number, setNumber] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="counter">
        <h2>{number}</h2>
        <div className="btns">
          <button
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              number > 0 ? setNumber(number - 1) : setNumber(0);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setNumber(0);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
