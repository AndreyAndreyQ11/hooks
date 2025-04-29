import React, { useState } from "react";
import s from "./Contacts.module.css";

export default function Contacts({ name, phoneNumber, fetchGetContacts, _id }) {
  function clickOnDelete() {
    fetch(`/cats/${_id}`, {
      method: "DELETE",
    })
      .then(() => fetchGetContacts())
      .catch((error) => console.error("Ошибка при удалении:", error));
  }
  return (
    <div className={s.container}>
      <span>
        {name}: {phoneNumber}
      </span>
      <button onClick={clickOnDelete}>delete</button>
    </div>
  );
}
