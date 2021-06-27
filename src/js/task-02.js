const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  const listEl = document.querySelector('#ingredients');
  listEl.appendChild(itemEl);
  return itemEl;
});