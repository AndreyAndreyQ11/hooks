import React, { useState } from "react";
import s from "./test_1.module.css";

function Test_1() {

  const [counter, setCounter] = useState(0)

  function increment() {


    setCounter((prevConter) => prevConter + 1)
  }

  function decrement() {
    setCounter((prevConter) => {
      return prevConter - 1
    })
  }


  return (
    <div className={s.container}>
      <h1>Счетчик :{counter}</h1>
      <button onClick={increment} className={s.buttonUp}>Up</button>
      <button onClick={decrement} className={s.buttonDown}>Down</button>
    </div>);
}

export default Test_1;
