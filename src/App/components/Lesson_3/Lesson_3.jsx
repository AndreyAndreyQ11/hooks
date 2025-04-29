import React, { useState, useEffect } from "react";
import s from "./Lesson_3.module.css";

import Phonebook from "./component/Phonebook/Phonebook.js"
import Contacts from "./component/Contacts/Contacts.js"

function Lesson_3() {

  const [contactsArray, setContactsArray] = useState([])
  const [filteredName, setFilteredName] = useState("")

  useEffect(() => {
    fetchGetContacts()
  }, []);

  function fetchGetContacts() {
    fetch("/cats")
      .then(res => res.json())
      .then(data => {
        setContactsArray(data);
      })
      .catch(error => console.error("Ошибка запроса:", error));
  }

  return (
    <div className={s.container}>
      <div className={s.phonebook}>
        <Phonebook
          setContactsArray={setContactsArray}
          setFilteredName={setFilteredName}
          fetchGetContacts={fetchGetContacts}
        />
      </div>

      <div className={s.contacts}><h3>Contacts:</h3>
        {contactsArray
          .filter(({ name }) =>
            name.toLowerCase().includes(filteredName.toLowerCase())
          )
          .map(({ name, phoneNumber, _id }) => (
            <Contacts
              key={name}
              name={name}
              phoneNumber={phoneNumber}
              fetchGetContacts={fetchGetContacts}
              _id={_id}
            />
          ))}
      </div>

    </div>);
}

export default Lesson_3;
