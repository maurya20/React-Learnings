import React, { useEffect } from "react";
import Button from "./containers/Button";
import NewsItem from "./containers/NewsItem";
import Loading from "./containers/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getDog } from "./actions";
let App = () => {
  const { dog, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDog());
  }, []);
  return (
    <div>
      <Button />
      <Loading loading={loading} />
      <NewsItem dog={dog} />
    </div>
  );
};
export default App;
