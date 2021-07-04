const categories = document.querySelectorAll('.item'); //Категории
console.log('В списке', categories.length, 'категорий'); // В списке 3 категорий

categories.forEach(f => {
    console.log('Категория:', f.firstElementChild.textContent); 
    console.log('Количество элементов:', f.lastElementChild.children.length); 
});
