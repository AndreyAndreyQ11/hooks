import React, { useState } from "react";
import s from "./Phonebook.module.css";

import InputSearch from "./InputSearch/InputSearch.js";

export default function Phonebook({ counter, setCounter }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleNameChange(e) {
    const name = e.target.value;
    setName(name);
  }

  function handleNumberChange(e) {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  }

  function handleAddContact() {
    if (name == "") {
      return alert("ведите имя");
    }
    if (number == "") {
      return alert("ведите номер");
    }

    setCounter((prevCounter) => {
      return {
        ...prevCounter,
        [name]: number,
      };
    });
    setName("");
    setNumber("");
  }
  return (
    <>
      <h1 className={s.h1}>Phonebook</h1>
      Name:
      <input
        className={s.input}
        key="text"
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={handleNameChange}
      />
      Number:
      <input
        className={s.input}
        key="number"
        placeholder="Введите номер"
        value={number}
        onChange={handleNumberChange}
      />
      <button className={s.button} type="submit" onClick={handleAddContact}>
        Add contact
      </button>
      <InputSearch counter={counter} setCounter={setCounter} />
    </>
  );
}
