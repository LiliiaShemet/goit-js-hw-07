const refs = {
  input: document.querySelector('#name-input'),
  nameLable: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
  console.log('Получил фокус');
}
function onInputBlur() {
  console.log('Потерял фокус');
}
function onInputChange(event) {
  if (event.currentTarget.value === '')
    refs.nameLable.textContent = 'незнакомец'
  else
    refs.nameLable.textContent = event.currentTarget.value;
}
