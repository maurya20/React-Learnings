import React from "react";

let Loading = ({ loading }) =>
  loading ? (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://home.askvet.app/images/loading-dog.gif"
        width="180px"
        height="100px"
      />
    </div>
  ) : (
    <h1>Look I found a dog. It is here.</h1>
  );

export default Loading;
