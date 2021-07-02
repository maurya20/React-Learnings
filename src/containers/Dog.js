import React from "react";
import Loading from "./Loading";
import styled from "styled-components";

const Image = styled.img`
  box-shadow: 5px 10px 18px #888888;
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 500px;
`;
let Dog = ({ dog, loading }) => {
  return (
    <>
      {dog && !loading ? (
        <section style={{ margin: "50px 0px 0px 0px" }}>
          <h3>Look I found a dog here.</h3>

          <Image
            src={dog}
            alt="Dog"
            width="500px"
            height="400px"
            draggable="true"
          />
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Dog;
