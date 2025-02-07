import React, { useState } from "react";
import s from "./Contact.module.css";

export default function Contact({ name, number, clickOnDelete }) {
  return (
    <div className={s.container}>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => clickOnDelete(name)}>delete</button>
    </div>
  );
}
