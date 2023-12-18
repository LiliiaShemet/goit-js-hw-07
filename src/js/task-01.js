const categories = document.querySelectorAll('.item'); //Категорії
console.log('В списку', categories.length, 'категорій'); // В списке 3 категорий

categories.forEach(f => {
    console.log('Категорія:', f.firstElementChild.textContent); 
    console.log('Кількість елементів:', f.lastElementChild.children.length); 
});
