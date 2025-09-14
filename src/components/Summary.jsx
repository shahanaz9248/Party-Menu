import React from "react";
import style from "../CSS/Summary.module.css";

function Summary({ totalCount }) {
  return (
    <div className={style.summary}>
      <p className={style.text}>Total Dishes Selected: {totalCount}</p>
      <button className={style.button}>Continue</button>
    </div>
  );
}

export default Summary;
