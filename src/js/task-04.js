
 const incr = document.querySelector("[data-action='increment']");
 const decr = document.querySelector("[data-action='decrement']");
 const total = document.querySelector('#value');

 let counterValue = 0;
 decr.addEventListener('click', () => {
   counterValue -= 1;
   total.textContent = counterValue;
   
 });
 incr.addEventListener('click', () => {
   counterValue += 1;
   total.textContent = counterValue;
 });
