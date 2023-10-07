const ingredients = [
    'Картопля',
    'Гриби',
    'Перець',
    'Помідори',
    'Зелень',,
  ];
  

  const IngredientsList = document.getElementById('ingredients');
  

  const fragment = document.createDocumentFragment();
  

  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    fragment.appendChild(li);
  });
  

  IngredientsList .appendChild(fragment);
  
