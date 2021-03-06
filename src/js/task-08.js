
let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.querySelector('#boxes');
let control = document.querySelector('#controls input');
let amount = '';

function getAmount() {
  let amount = +control.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = boxes.lastElementChild != null ? boxes.lastElementChild.clientWidth + 10 : 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
function random() {
  return Math.random() * 256;
}
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);
