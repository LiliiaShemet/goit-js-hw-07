const categories = document.querySelectorAll('.item'); //Категории
const categoryNames = document.querySelectorAll('h2'); // Имена каегорий

const countCategories = categories.length;
console.log('В списке', countCategories, 'категорий'); // В списке 3 категорий


console.log('Категория:', categoryNames[0].textContent); // Категория: Животные;
const firstList = categories[0].lastElementChild;
const firstCountElements = firstList.children.length;
console.log('Количество элементов:', firstCountElements); // Количество элементов: 4

console.log('Категория:', categoryNames[1].textContent);
const secondList = categories[1].lastElementChild;
const secondCountElements = secondList.children.length;
console.log('Количество элементов:', secondCountElements); // Количество элементов: 3

console.log('Категория:', categoryNames[2].textContent);
const thirdList = categories[2].lastElementChild;
const thistCountElenments = thirdList.children.length;
console.log('Количество элементов:', thistCountElenments); // Количество элементов: 5
