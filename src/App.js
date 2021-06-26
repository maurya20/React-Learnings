import React from "react";
import Button from "./containers/Button";
import NewsItem from "./containers/NewsItem";
import Loading from "./containers/Loading";
import { useSelector } from "react-redux";
let App = () => {
  const { dog, loading } = useSelector((state) => state);
  return (
    <div>
      <Button />
      <Loading loading={loading} />
      <NewsItem dog={dog} />
    </div>
  );
};
export default App;
