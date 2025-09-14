import React,{useState} from 'react'
import style from "../CSS/DishList.module.css"
import Ingredients from './Ingredients';
import DishCard from './DishCard'
function DishList({dishes,dishType}) {
     const filteredDishes=dishType==="all"?dishes:dishes.filter((dish)=>dish.mealType==dishType)
  return (
    <div className={style.dishlist}>
       <div className={style.list}>
        {filteredDishes.map((dish) => (
          <DishCard dish={dish} key={dish.id}/>
        ))}
      </div>
    </div>
  )
}

export default DishList
