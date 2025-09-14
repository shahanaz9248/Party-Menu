import React,{useState} from 'react'
import style from "../CSS/DishList.module.css"
import Ingredients from './Ingredients';
import DishCard from './DishCard'
function DishList({dishes,dishType,searchQuery}) {
     let filteredDishes = dishes;

  if (dishType !== 'all') {
    filteredDishes = filteredDishes.filter((dish) => dish.mealType === dishType);
  }

     if (searchQuery) {
    filteredDishes = filteredDishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchQuery)
    );
  }
  return (
    <div className={style.dishlist}>
       <div className={style.list}>
       {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <DishCard dish={dish} key={dish.id} />
          ))
        ) : (
          <p>No dishes found.</p>
        )}
      </div>
    </div>
  )
}

export default DishList
