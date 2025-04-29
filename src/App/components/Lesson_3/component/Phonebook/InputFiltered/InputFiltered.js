import React, { useState } from "react";
import s from "./InputFiltered.module.css";

export default function InputFiltered({ setFilteredName }) {
  function search(e) {
    const value = e.target.value.toLowerCase();
    setFilteredName((pre) => value);
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
