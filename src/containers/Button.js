import React from "react";
import { useDispatch } from "react-redux";
import { getDog } from "../actions";

let Button = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(getDog())}>Press to search a Dog.</button>
  );
};

export default Button;
