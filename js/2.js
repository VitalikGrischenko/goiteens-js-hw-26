const ingredients = [
    'Картопля',
    'Гриби',
    'Перець',
    'Помідори',
    'Зелень',,
  ];
  

  const ulIngredientsList = document.getElementById('ingredients');
  

  const fragment = document.createDocumentFragment();
  

  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    fragment.appendChild(li);
  });
  

  ulIngredientsList .appendChild(fragment);
  