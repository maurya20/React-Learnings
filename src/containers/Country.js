import React, { useEffect, useState } from "react";
import axios from "axios";

export const Country = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      params: {
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      },
      url: "https://jsonplaceholder.typicode.com/posts",
      responseType: "json",
    }).then((response) => {
      console.log("newwwwwww???", response.data);
    });
  }, []);
  useEffect(() => {
    axios({
      url: "https://countries.trevorblades.com",
      method: "post",
      data: {
        query: `
        query{
          continents{
           code
         name
         }
         }
          `,
      },
    }).then((result) => {
      ///console.log("from graphql>>>>>>>>>>>>>>", result.data.data.continents);
      setList(result.data.data.continents);
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
