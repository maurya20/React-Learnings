import React, { useEffect, useState } from "react";
import axios from "axios";

export const Country = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://countries.trevorblades.com",
      method: "post",
      data: {
        query: `
        query{
          countries{
           code
         name
         }
         }
          `,
      },
    }).then((result) => {
      console.log("from graphql>>>>>>>>>>>>>>", result.data.data.countries);
      setList(result.data.data.countries);
    });
  }, []);
  return (
    <div className="container" style={{ margin: "0px 0px 50px 0px" }}>
      {list &&
        list.map((x, i) => {
          return (
            <li key={i}>
              Country Name:{x.name} {"   "} Country Code: {x.code}
            </li>
          );
        })}
    </div>
  );
};
