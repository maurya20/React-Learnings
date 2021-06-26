import React from "react";

const MyHoc = (WrappedComponent) => {
  const myDate = new Date().toLocaleDateString();
  return (props) => {
    return (
      <div style={{ color: "red" }}>
        <h3>Today is: {myDate}</h3>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
export default MyHoc;
