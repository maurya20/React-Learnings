import React, { useMemo, useState } from "react";

const Home = () => {
  const [state, setstate] = useState(null);
  useMemo(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setstate(data));
  }, []);

  console.log("Rerendering");
  return (
    <div>
      <h3>Home</h3>
      <h5>{state?.message}</h5>
    </div>
  );
};
export default Home;
