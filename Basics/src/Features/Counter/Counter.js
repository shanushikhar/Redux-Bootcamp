import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  getTestingVal,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const getTestVal = useSelector(getTestingVal);
  // console.log(getTestVal);
  const dispatch = useDispatch();

  const [increaseAmount, setIncreaseAmount] = useState(count);

  const addValue = Number(increaseAmount) || 0;

  const resetAll = () => {
    setIncreaseAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>
        {getTestVal} is {count}
      </p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        value={increaseAmount}
        // setting input val as zero ATM when we pass any string
        //onChange={(e) => setIncreaseAmount(Number(e.target.value) || 0)}
        onChange={(e) => setIncreaseAmount(e.target.value)}
      />

      <div>
        <button
          //onClick={() => dispatch(incrementByAmount(increaseAmount))}
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Increase by {increaseAmount}{" "}
        </button>
        <button onClick={resetAll}>Reset </button>
      </div>
    </section>
  );
};

export default Counter;

// rafce for code snippet
