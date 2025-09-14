import React,{useState} from 'react'
import style from '../CSS/DishCard.module.css'
function DishCard({ dish }) {
  const [showIngredients, setShowIngredients] = useState(false)
  const [add,setAdd] =useState('add')
  if (showIngredients) {
   return(
    <div className={style.card} >
      <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-cross-icon-png-image_967108.jpg" className={style.i} onClick={()=>setShowIngredients(false)}/>
      <div className={style.ing}>
        {dish.ingredients.map((ingredient,index)=>(
        <span key={index}><b>{ingredient.name}</b>: {ingredient.quantity}<br/></span>
       ))}
       </div>  
   </div>
   )
  } else {
    return (
      <div className={style.card}>
        <img
          src={dish.image}
          alt={dish.name}
          className={style.image}
        />
        <h3 className={style.name}>{dish.name}</h3>
        <p><b>Type:</b> {dish.type}</p>
        <p className={style.description}>{dish.description}</p>
        <button
    className={style.bt}
          onClick={() => setShowIngredients(true)}
        >
          Show Ingredients
        </button>
        <button className={style[add]}>Add</button>
      </div>
    )
  }
}

export default DishCard
