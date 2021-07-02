import React from "react";
import { useDispatch } from "react-redux";
import { getDog } from "../actions";
import styled from "styled-components";
const Btn = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.primary
      ? "linear-gradient(to bottom, #0099cc 0%, #ff99cc 100%)"
      : "white"};
  &:hover {
    background: lightblue;
    cursor: pointer;
  }
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  position: fixed;
  top: 10px;
  left: 40%;
  border-radius: 10px;
  padding: 10px;
  margin: 30px;
`;

let Button = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Btn primary onClick={() => dispatch(getDog())}>
        Press to search a Dog.
      </Btn>
    </>
  );
};

export default Button;
