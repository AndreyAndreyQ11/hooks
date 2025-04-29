import React, { useState } from "react";
import s from "./Phonebook.module.css";

import InputFiltered from "./InputFiltered/InputFiltered.js";

export default function Phonebook({
  setContactsArray,
  setFilteredName,
  fetchGetContacts,
}) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleNameChange(e) {
    const name = e.target.value;
    setName(name);
  }

  function handlephoneNumberChange(e) {
    const value = e.target.value;
    if (/^[\d\s-]*$/.test(value)) {
      setPhoneNumber(value);
    }
  }

  const fetchPostContacts = (name, phoneNumber) => {
    fetch("/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, phoneNumber: phoneNumber }),
    })
      .then(() => fetchGetContacts()) // После добавления обновляем список
      .catch((error) => console.error("Ошибка при добавлении:", error));
  };

  function handleAddContact() {
    if (name == "") {
      return alert("ведите имя");
    }
    if (phoneNumber == "") {
      return alert("ведите номер");
    }

    fetchPostContacts(name, phoneNumber);
    setName("");
    setPhoneNumber("");
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
      phoneNumber:
      <input
        className={s.input}
        key="phoneNumber"
        placeholder="Введите номер"
        value={phoneNumber}
        onChange={handlephoneNumberChange}
      />
      <button className={s.button} type="submit" onClick={handleAddContact}>
        Add contact
      </button>
      <InputFiltered setFilteredName={setFilteredName} />
    </>
  );
}
