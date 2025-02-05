import React, { useState } from "react";
import s from "./InputSearch.module.css";

export default function InputSearch({ counter, setCounter }) {
  const [inputValue, setInputValue] = useState("");

  function search(e) {
    const value = e.target.value;
    setInputValue(value);
    console.log(value);
  }
  return (
    <>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        placeholder="Введите имя для поиска"
        onChange={search}
      />
    </>
  );
}
