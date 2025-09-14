import React, { useState } from 'react';
import DishList from './components/DishList';
import MealType from './components/MealType';
import SearchBar from './components/SearchBar';
import { dishes } from './data/mockDishes';

function App() {
  const [dishType, setDishType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <MealType setDishType={setDishType} />
      <DishList dishes={dishes} dishType={dishType} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
