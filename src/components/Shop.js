import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../state/features/counter/counterSlice";
import "./Shop.css";

const Shop = () => {
  const dispatch = useDispatch();
  const [Amount, setAmount] = useState(0);
  const addValue = (x) => {
    return Number(x) || 0;
  };
  return (
    <div className="MainContainer">
      <div className="amountValue">
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          -{" "}
        </button>
        Deposit/Withdraw Money
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch(increment())}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <button className="btn btn-primary" onClick={() => dispatch(reset())}>
        Reset
      </button>
      <div className="add-amount my-3">
        <input
          type="text"
          value={Amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(incrementByAmount(addValue(Amount)))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Shop;
