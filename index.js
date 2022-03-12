let element = document.querySelector('.profile__button-edit');

function showClick() {
  document.querySelector('.popup_opened').style.display = 'block';
}

element.addEventListener('click', showClick); 

let elementClose = document.querySelector('.popup__close');

function close() {
  document.querySelector('.popup_opened').style.display = 'none';
}

elementClose.addEventListener('click', close); 


let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');
let formElement = document.querySelector('.form');

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.form__name').value;
  let jobInput = document.querySelector('.form__status').value;
  
  name.textContent = nameInput;
  status.textContent = jobInput;
  close();
}

formElement.addEventListener('submit', formSubmitHandler); 