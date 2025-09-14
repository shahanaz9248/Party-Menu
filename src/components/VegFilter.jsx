import React from "react";
import style from "../CSS/VegFilter.module.css";

function VegFilter({ vegFilter, setVegFilter }) {
  return (
    <div className={style.container}>
      <label>
        <input
          type="radio"
          value="all"
          checked={vegFilter === "all"}
          onChange={() => setVegFilter("all")}
        />
        All
      </label>

      <label>
        <input
          type="radio"
          value="veg"
          checked={vegFilter === "veg"}
          onChange={() => setVegFilter("veg")}
        />
        Veg
      </label>

      <label>
        <input
          type="radio"
          value="nonveg"
          checked={vegFilter === "nonveg"}
          onChange={() => setVegFilter("nonveg")}
        />
        Non-Veg
      </label>
    </div>
  );
}

export default VegFilter;
