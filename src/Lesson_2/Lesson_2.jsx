import React, { useState } from "react";
import s from "./Lesson_2.module.css";

import CustomButton from "./component/CustomButton/CustomButton.js"
import CustomValue from "./component/CustomValue/CustomValue.js"


function Lesson_2() {

  const [counter, setCounter] = useState({ Good: 0, Neutral: 0, Bad: 0 })

  function clickOnCounter(clickButton) {
    setCounter((prevCounter) => {
      return {
        ...prevCounter,
        [clickButton]: prevCounter[clickButton] + 1,
      };
    });
  }

  function getTotalCount(counter) {
    return Object.values(counter).reduce((sum, value) => sum + value, 0);
  }

  function getAverageReviewValue() {
    const { Good, Neutral, Bad } = counter
    const denominator = Good + Neutral + Bad;

    return denominator === 0 ? "0%" : Math.round((Good + Neutral * 0.5) / denominator * 10000) / 100 + '%';
  }

  return (
    <div className={s.container}>
      <div className={s.main}><h2>Please leave feedback </h2>
        {Object.entries(counter).map(([name, value]) => (
          <CustomButton
            key={name}
            text={name}
            clickOnCounter={clickOnCounter}
          />
        ))}

      </div>
      <div className={s.statistic}><h4>Statistics
      </h4>
        {Object.entries(counter).map(([name, value]) => (
          <CustomValue
            key={name}
            name={name}
            value={value}
          />
        ))}
        <CustomValue
          name="Total"
          value={getTotalCount(counter)}
        />

        <CustomValue
          name="Positive feedback"
          value={getAverageReviewValue()}
        />
      </div>
    </div>
  );
}

export default Lesson_2;
