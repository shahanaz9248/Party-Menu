import React, { useState } from 'react';
import style from '../CSS/MealType.module.css';

function MealType({ setDishType, getCountByType }) {
  const [active, setActive] = useState("all");

  const handleClick = (type) => {
    setActive(type);
    setDishType(type);
  };

  return (
    <div className={style.mealType}>
      <button
        onClick={() => handleClick("all")}
        className={active === "all" ? style.selected : style.notSelected}
      >
        All ({getCountByType("STARTER") + getCountByType("MAIN COURSE") + getCountByType("DESSERT") + getCountByType("SIDES")})
      </button>
      <button
        onClick={() => handleClick("STARTER")}
        className={active === "STARTER" ? style.selected : style.notSelected}
      >
        STARTER ({getCountByType("STARTER")})
      </button>
      <button
        onClick={() => handleClick("MAIN COURSE")}
        className={active === "MAIN COURSE" ? style.selected : style.notSelected}
      >
        MAIN COURSE ({getCountByType("MAIN COURSE")})
      </button>
      <button
        onClick={() => handleClick("DESSERT")}
        className={active === "DESSERT" ? style.selected : style.notSelected}
      >
        DESSERT ({getCountByType("DESSERT")})
      </button>
      <button
        onClick={() => handleClick("SIDES")}
        className={active === "SIDES" ? style.selected : style.notSelected}
      >
        SIDES ({getCountByType("SIDES")})
      </button>
    </div>
  );
}


export default MealType;
