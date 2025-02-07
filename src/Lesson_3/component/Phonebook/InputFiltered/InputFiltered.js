import React, { useState } from "react";
import s from "./InputFiltered.module.css";

export default function InputFiltered({ counter, setFilteredCounter }) {
  function search(e) {
    const value = e.target.value.toLowerCase();

    setFilteredCounter(
      Object.fromEntries(
        Object.entries(counter).filter(([key]) =>
          key.toLowerCase().includes(value)
        )
      )
    );
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
