import React, { useState } from "react";
import s from "./CustomValue.module.css";

export default function CustomValue({ name, value }) {
  return (
    <p className={s.statistics}>
      {name}: <span>{value}</span>
    </p>
  );
}
