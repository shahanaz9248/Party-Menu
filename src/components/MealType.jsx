import React, { useState } from 'react'
import style from '../CSS/MealType.module.css'
function MealType({setDishType}) {
    const [all,setAll]=useState('selected')
    const [starter,setStarter]=useState('notSelected')
    const [main,setMain]=useState('notSelected')
    const [dessert,setDessert]=useState('notSelected')
    const [sides,setSides]=useState('notSelected')

    const handleClick=(type)=>{
        setDishType(type)
       if(type==='all'){ 
        setAll('selected')
        setStarter('notSelected')
        setMain('notSelected')
        setDessert('notSelected')
        setSides('notSelected')
       }else if(type==='STARTER'){
        setStarter('selected')
        setAll('notSelected')
        setMain('notSelected')
        setDessert('notSelected')
        setSides('notSelected')
       }else if(type==='MAIN COURSE'){
        setAll('notSelected')
        setStarter('notSelected')
        setMain('selected')
        setDessert('notSelected')
        setSides('notSelected')
       }else if(type==='DESSERT'){
        setAll('notSelected')
        setStarter('notSelected')
        setMain('notSelected')
        setDessert('selected')
        setSides('notSelected')
       }else{
        setAll('notSelected')
        setStarter('notSelected')
        setMain('notSelected')
        setDessert('notSelected')
        setSides('selected')
       }
    }
    return (
        <div className={style.mealType}>
            <button onClick={()=>handleClick('all')} className={style[all]}>All</button>
            <button onClick={()=>handleClick('STARTER')} className={style[starter]}>STARTER</button>
            <button onClick={()=>handleClick('MAIN COURSE')} className={style[main]}>MAIN COURSE</button>
            <button onClick={()=>handleClick('DESSERT')} className={style[dessert]}>DESSERT</button>
            <button onClick={()=>handleClick('SIDES')} className={style[sides]}>SIDES</button>
        </div>
    )
}

export default MealType
