import React from "react";

const NeswFeed = (props) => {
  const items = props.news.map((item) => {
    return (
      <div>
        <h3 style={{color:"blue", textAlign:"center"}}>{item.title}</h3>
        <div>{item.feed}</div>
      </div>
    );
  });
  return <div>{items}</div>;
};

export default NeswFeed;
