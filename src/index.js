import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Lesson_1 from "./Lesson_1/Lesson_1";
import Lesson_2 from "./Lesson_2/Lesson_2";
import Lesson_3 from "./Lesson_3/Lesson_3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Lesson_1 />
    <Lesson_2 />
    <Lesson_3 />
  </React.StrictMode>
);
