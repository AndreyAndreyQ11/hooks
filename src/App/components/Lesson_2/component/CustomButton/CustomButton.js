import React, { useState } from "react";
import s from "./CustomButton.module.css";

export default function CustomButton({ text, clickOnCounter }) {
  return (
    <button className={s.button} onClick={() => clickOnCounter(text)}>
      {text}
    </button>
  );
}
