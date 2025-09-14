import React,{useState} from "react";
import { dishes } from "./data/mockDishes";
import  DistList from "./components/DishList"
import SearchBar from "./components/SearchBar";
import MealType from "./components/MealType";

export default function App() {
  const[dishType,setDishType]=useState('all')
  return (
    <div className="appWrapper">
      <SearchBar />
      <MealType setDishType={setDishType}/>
       <DistList dishes={dishes} dishType={dishType}/>
    </div>
  );
}
