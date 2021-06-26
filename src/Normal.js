import React from "react";
import MyHoc from "./MyHoc";

const Normal = (props) => {
  return (
    <div>
      I was Normal Before I Got Wrapped In HOC.
      <h3 style={{ color: "black" }}>{props.propData}</h3>
    </div>
  );
};

export default MyHoc(Normal);
