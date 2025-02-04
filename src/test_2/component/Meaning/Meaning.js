import React, { useState } from "react";
import s from "./Meaning.module.css";

export default function Meaning({ name, meaning }) {
  return (
    <p className={s.Statistics}>
      {name}: {meaning}
    </p>
  );
}
