import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logAction } from "../actions";
import Hooks from './Hooks'




const Home = () => {
  const counter = useSelector((state) => state.counter);
 
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello from Home Component!!!!</h1>
      <h3>Counter: {counter.count}</h3>
      <button className="btn btn-primary btn-lg " onClick={() => dispatch(increment(5))}>+</button>
      <button className="btn btn-primary btn-lg "  onClick={() => dispatch(decrement())}>-</button>
      <button  className="btn btn-primary btn-lg " onClick={() => dispatch(logAction())}>Log-Action</button>

      <hr></hr>
      <Hooks/>
    </div>
  );
};

export default Home;
