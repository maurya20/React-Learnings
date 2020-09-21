import React from "react";

const user = {
  name: "Mukesh",
  age: 26,
  city: "Delhi",
  college: "GCET",
};

const Main = () => {
  return (
    <div className="container" style={{backgroundColor:"brown"}}>
      <h3> This is main !!! </h3>
      <h4>
        My name is {user.name}, I am {user.age} years old, I live in {user.city}{" "}
        and my college name is {user.college}.
      </h4>
    </div>
  );
};

export default Main;
