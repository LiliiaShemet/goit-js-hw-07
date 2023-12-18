const ingredients = ['Картопля', 'Гриби', 'Часник', 'Помідори', 'Зелень', 'Приправи'];
const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  return itemEl;
});

listEl.append(...elements);