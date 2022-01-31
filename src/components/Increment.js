import { useDispatch } from "react-redux";
import React from "react";
import { increment } from "src/redux/counter";

function Increment() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment State</button>
    </div>
  );
}

export default Increment;
