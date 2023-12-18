const refs = {
  input: document.querySelector('#name-input'),
  nameLable: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
  console.log('Отримав фокус');
}
function onInputBlur() {
  console.log('Втратив фокус');
}
function onInputChange(event) {
  if (event.currentTarget.value === '')
    refs.nameLable.textContent = 'незнайомець'
  else
    refs.nameLable.textContent = event.currentTarget.value;
}
