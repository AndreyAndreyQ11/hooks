import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Test_1 from "./test_1/test_1";
import Test_2 from "./test_2/test_2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test_1 />
    <Test_2 />
  </React.StrictMode>
);
