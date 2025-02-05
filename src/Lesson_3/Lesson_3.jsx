import React, { useState } from "react";
import s from "./Lesson_3.module.css";

import Phonebook from "./component/Phonebook/Phonebook.js"
import Contact from "./component/Contact/Contact.js"



function Lesson_3() {

  const [counter, setCounter] = useState({
    "Hermione Kline": "443 - 89 - 12", "Annie Copeland": "227 - 91 - 26",
    "Liam Patterson": "315 - 72 - 48", "Sophia Bennett": "198 - 65 - 39",
    "Oliver Hayes": "529 - 34 - 77",
  })

  function clickOnDelete(name) {
    const { [name]: _, ...rest } = counter;
    setCounter(rest);
  }

  return (
    <div className={s.container}>
      <div className={s.phonebook}>
        <Phonebook
          counter={counter}
          setCounter={setCounter}
        />
      </div>

      <div className={s.contacts}><h3>Contacts:</h3>
        {Object.entries(counter).map(([name, number]) => (
          <Contact
            key={name}
            name={name}
            number={number}
            clickOnDelete={clickOnDelete}
          />
        ))}</div>

    </div>);
}

export default Lesson_3;
