import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/worker";
import Chart from "./component/chart/Chart";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

axios
  .get(
    "/samples"
  )
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => {
    alert("error");
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Chart />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
