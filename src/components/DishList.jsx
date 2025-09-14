import React from 'react';
import style from "../CSS/DishList.module.css";
import DishCard from './DishCard';

function DishList({ dishes, dishType, searchQuery, vegFilter, addItem, removeItem, selectedItems }) {
  let filteredDishes = dishes;

  if (dishType !== 'all') {
    filteredDishes = filteredDishes.filter((dish) => dish.mealType === dishType);
  }

  if (searchQuery) {
    filteredDishes = filteredDishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (vegFilter !== 'all') {
    filteredDishes = filteredDishes.filter((dish) =>
      vegFilter === 'veg' ? dish.type === 'VEG' : dish.type === 'NON-VEG'
    );
  }

  return (
    <div className={style.dishlist}>
      <div className={style.list}>
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <DishCard
              dish={dish}
              key={dish.id}
              addItem={addItem}
              removeItem={removeItem}
              isSelected={selectedItems.some((item) => item.id === dish.id)}
            />
          ))
        ) : (
          <p>No dishes found.</p>
        )}
      </div>
    </div>
  );
}

export default DishList;
