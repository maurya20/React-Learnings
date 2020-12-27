import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logAction } from "../actions";





const Home = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) =>state.isLogged)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello from Home Component!!!!
     {isLogged ? 'LoggedIn' : 'Logged Out'}</h1>
      <h3>Counter: {counter.count}</h3>
      <button className="btn btn-primary btn-lg " onClick={() => dispatch(increment(5))}>+</button>
      <button className="btn btn-primary btn-lg "  onClick={() => dispatch(decrement())}>-</button>
      <button  className="btn btn-primary btn-lg " onClick={() => dispatch(logAction())}>Log-Action</button>

      <hr></hr>
    </div>
  );
};

export default Home;
