import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from "./component/chart/Chart";
import axios from "axios";

function App() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    axios
      .get("/liveBirth", {
        params: {
          area: "00",
          sub: "10",
          startYear: "201901",
          endYear: "202201"
        }
      })
      .then((res) => {
        const _data1 = [];
        const _data2 = [];
        res.data.data.map((item) => {
          _data1.push(item["PRD_DE"]);
          _data2.push(item["DT"]);

          setData1(_data1);
          setData2(_data2);
        });
      })
      .catch((e) => {
        alert("error");
      });
  }, []);

  return (
    <div>
      <Chart data2={data1} data1={data2}></Chart>
    </div>
  );
}

export default App;
