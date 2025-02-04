import React, { useState } from "react";
import s from "./ButtonName.module.css";

export default function ButtonName({ text, clickCount }) {
  return (
    <button className={s.button} onClick={() => clickCount(text)}>
      {text}
    </button>
  );
}
