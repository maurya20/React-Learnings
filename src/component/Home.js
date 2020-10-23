import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logAction } from "../actions";
const Home = () => {
  const counter = useSelector((state) => state.counter);
 
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello from Home Component!!!!</h1>
      <h3>Counter: {counter.count}</h3>
      <button className="btn btn-primary btn-lg btn-block" onClick={() => dispatch(increment(5))}>+</button>
      <button className="btn btn-primary btn-lg btn-block"  onClick={() => dispatch(decrement())}>-</button>
      <button  className="btn btn-primary btn-lg btn-block" onClick={() => dispatch(logAction())}>Log-Action</button>

      
    </div>
  );
};

export default Home;
