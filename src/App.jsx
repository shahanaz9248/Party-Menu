import React, { useState } from 'react';
import DishList from './components/DishList';
import MealType from './components/MealType';
import SearchBar from './components/SearchBar';
import { dishes } from './data/mockDishes';
import Summary from './components/Summary';
import VegFilter from "./components/VegFilter";
function App() {
  const [dishType, setDishType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (dish) => {
    if (!selectedItems.find((item) => item.id === dish.id)) {
      setSelectedItems([...selectedItems, dish]);
    }
  };

  const removeItem = (dishId) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== dishId));
  };

  const getCountByType = (type) =>
    selectedItems.filter((dish) => dish.mealType === type).length;

  const totalCount = selectedItems.length;

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />

      <MealType setDishType={setDishType}  getCountByType={getCountByType}/>
      <VegFilter vegFilter={vegFilter} setVegFilter={setVegFilter} />
      <DishList
        dishes={dishes}
        dishType={dishType}
        searchQuery={searchQuery}
        vegFilter={vegFilter}
        addItem={addItem}
        removeItem={removeItem}
        selectedItems={selectedItems}
      />

       <Summary totalCount={totalCount} />
    </div>
  );
}

export default App;
