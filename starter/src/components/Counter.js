import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //Handle Increment of the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };
  //Handle Decrement of the counter
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={handleDecrement}>
          minus 1
        </button>
        <button className="btn btn-2" onClick={handleIncrement}>
          Add 1
        </button>

        <h3 ClassName="counter">Count is {count}</h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
