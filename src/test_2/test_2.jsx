import React, { useState } from "react";
import s from "./test_2.module.css";

import ButtonName from "./component/ButtonName/ButtonName.js"
import Meaning from "./component/Meaning/Meaning.js"


function Test_2() {

  const [counter, setCounter] = useState({ Good: 0, Neutral: 0, Bad: 0 })
  // проверка проверка проверка проверка проверка



  function clickCount(clickButton) {
    setCounter((prevCounter) => {
      return {
        ...prevCounter, // сохраняем старые значения
        [clickButton]: prevCounter[clickButton] + 1, // увеличиваем выбранный счетчик
      };
    });
  }

  function getTotalCount(counter) {
    return Object.values(counter).reduce((sum, value) => sum + value, 0);
  }

  function randomPercentage() {
    return Math.round(Math.random() * 100 * 1000) / 1000 + "%";
  }



  return (
    <div className={s.container}>
      <div className={s.main}><h2>Please leave feedback </h2>
        {Object.entries(counter).map(([name, value]) => (
          <ButtonName
            key={name}
            text={name}
            clickCount={clickCount} // Передаем функцию для увеличения значения
          />
        ))}

      </div>
      <div className={s.statistic}><h4>Statistics
      </h4>
        {Object.entries(counter).map(([name, value]) => (
          <Meaning
            key={name + "_meaning"}
            name={name}
            meaning={value}
          />
        ))}
        <Meaning
          key={"Total"}
          name={"Total"}
          meaning={getTotalCount(counter)}
        />

        <Meaning
          key={"Positive feedback"}
          name={"Positive feedback"}
          meaning={randomPercentage()}
        />
      </div>
    </div>
  );
}

export default Test_2;
