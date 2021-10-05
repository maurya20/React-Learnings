import React, { useEffect } from "react";
import Button from "./containers/Button";
import Dog from "./containers/Dog";
import { useDispatch, useSelector } from "react-redux";
import { getDog } from "./actions";
import { Country } from "./containers/Country";
import { ImgToPdf } from "./components/ImgToPdf";
let App = () => {
  const { dog, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDog());
  }, []);
  return (
    <div>
      {/* <ImgToPdf /> */}
      <Button />
      <Dog dog={dog} loading={loading} />
      <Country />
    </div>
  );
};
export default App;
