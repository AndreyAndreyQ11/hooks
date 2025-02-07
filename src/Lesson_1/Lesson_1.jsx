import React, { useState } from "react";
import s from "./Lesson_1.module.css";

function Lesson_1() {

  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter((prev) => prev + 1)
  }

  function decrement() {
    setCounter((prev) => {
      return prev - 1
    })
  }

  return (
    <div className={s.container}>
      <h1>Счетчик :{counter}</h1>
      <button onClick={increment} className={s.buttonUp}>Up</button>
      <button onClick={decrement} className={s.buttonDown}>Down</button>
    </div>);
}

export default Lesson_1;
