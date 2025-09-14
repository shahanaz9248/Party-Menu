export const dishes = [
  {
    "id": 1,
    "name": "Paneer Tikka",
    "description": "Cubes of paneer marinated in spices and grilled in a tandoor.",
    "image": "https://placehold.co/300x200/FFD1A9/8B0000?text=Paneer+Tikka",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Spices", "quantity": "to taste" }
    ]
  },
  {
    "id": 2,
    "name": "Veg Manchurian",
    "description": "Fried vegetable balls tossed in tangy Indo-Chinese sauce.",
    "image": "https://placehold.co/300x200/FCC2B4/5C4033?text=Veg+Manchurian",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Cabbage", "quantity": "1 cup" },
      { "name": "Carrot", "quantity": "1/2 cup" },
      { "name": "Soy Sauce", "quantity": "2 tbsp" }
    ]
  },

  // 🍗 NON-VEG STARTERS
  {
    "id": 3,
    "name": "Chicken Tikka",
    "description": "Tender chicken chunks marinated with yogurt and spices, grilled to perfection.",
    "image": "https://placehold.co/300x200/FADADD/8B0000?text=Chicken+Tikka",
    "mealType": "STARTER",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken", "quantity": "300g" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Spices", "quantity": "to taste" }
    ]
  },
  {
    "id": 4,
    "name": "Fish Fingers",
    "description": "Crispy fried fish sticks served with tartar sauce.",
    "image": "https://placehold.co/300x200/E8D2AE/004953?text=Fish+Fingers",
    "mealType": "STARTER",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Fish Fillets", "quantity": "200g" },
      { "name": "Breadcrumbs", "quantity": "1 cup" },
      { "name": "Egg", "quantity": "1" }
    ]
  },

  // 🌱 VEG MAIN COURSE
  {
    "id": 5,
    "name": "Kadhai Paneer",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Capsicum", "quantity": "1 large" }
    ]
  },
  {
    "id": 6,
    "name": "Dal Tadka",
    "description": "Yellow lentils tempered with cumin, garlic, and ghee.",
    "image": "https://placehold.co/300x200/F6E2B3/5C4033?text=Dal+Tadka",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Toor Dal", "quantity": "1 cup" },
      { "name": "Garlic", "quantity": "4 cloves" },
      { "name": "Ghee", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 7,
    "name": "Veg Biryani",
    "description": "Fragrant basmati rice cooked with vegetables and spices.",
    "image": "https://placehold.co/300x200/F9D5E5/4B0082?text=Veg+Biryani",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Mixed Vegetables", "quantity": "2 cups" },
      { "name": "Spices", "quantity": "to taste" }
    ]
  },

  // 🍗 NON-VEG MAIN COURSE
  {
    "id": 8,
    "name": "Butter Chicken",
    "description": "Chicken cooked in creamy tomato-based gravy with butter.",
    "image": "https://placehold.co/300x200/FBC4AB/8B0000?text=Butter+Chicken",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Tomato Puree", "quantity": "1 cup" },
      { "name": "Butter", "quantity": "3 tbsp" }
    ]
  },
  {
    "id": 9,
    "name": "Mutton Rogan Josh",
    "description": "Aromatic lamb curry cooked with Kashmiri spices.",
    "image": "https://placehold.co/300x200/D8BFD8/5C0033?text=Mutton+Rogan+Josh",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Mutton", "quantity": "500g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Kashmiri Chili", "quantity": "2 tsp" }
    ]
  },
  {
    "id": 10,
    "name": "Prawn Curry",
    "description": "Juicy prawns cooked in coconut-based curry sauce.",
    "image": "https://placehold.co/300x200/F5E6CC/004953?text=Prawn+Curry",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Prawns", "quantity": "300g" },
      { "name": "Coconut Milk", "quantity": "1 cup" },
      { "name": "Spices", "quantity": "to taste" }
    ]
  },

  // 🍞 SIDES
  {
    "id": 11,
    "name": "Tandoori Roti",
    "description": "Whole wheat flatbread cooked in a clay oven.",
    "image": "https://placehold.co/300x200/EADBC8/654321?text=Tandoori+Roti",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Whole Wheat Flour", "quantity": "2 cups" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Water", "quantity": "as needed" }
    ]
  },
  {
    "id": 12,
    "name": "Butter Naan",
    "description": "Soft and fluffy Indian flatbread topped with butter.",
    "image": "https://placehold.co/300x200/F8E2CF/8B4513?text=Butter+Naan",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "All-Purpose Flour", "quantity": "2 cups" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Butter", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 13,
    "name": "Jeera Rice",
    "description": "Fragrant basmati rice flavored with cumin seeds.",
    "image": "https://placehold.co/300x200/FFF2B2/5C4033?text=Jeera+Rice",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Cumin Seeds", "quantity": "2 tsp" },
      { "name": "Ghee", "quantity": "1 tbsp" }
    ]
  },

  // 🍮 DESSERTS
  {
    "id": 14,
    "name": "Gulab Jamun",
    "description": "Soft fried milk-solid dumplings soaked in sugar syrup.",
    "image": "https://placehold.co/300x200/F9E2AF/8B4513?text=Gulab+Jamun",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Khoya", "quantity": "200g" },
      { "name": "Flour", "quantity": "2 tbsp" },
      { "name": "Sugar Syrup", "quantity": "2 cups" }
    ]
  },
  {
    "id": 15,
    "name": "Rasgulla",
    "description": "Spongy cheese balls soaked in light sugar syrup.",
    "image": "https://placehold.co/300x200/FDE2E4/800020?text=Rasgulla",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Chenna (Cottage Cheese)", "quantity": "200g" },
      { "name": "Sugar Syrup", "quantity": "2 cups" },
      { "name": "Cardamom", "quantity": "2 pods" }
    ]
  }
];
