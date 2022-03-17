let element = document.querySelector('.profile__button-edit');
let elementClose = document.querySelector('.popup__close');
let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');
let formElement = document.querySelector('.popup__form');

function showClick() {
  document.querySelector('.popup_opened').style.display = 'flex';
}

element.addEventListener('click', showClick); 


function close() {
  document.querySelector('.popup_opened').style.display = 'none';
}

elementClose.addEventListener('click', close); 




function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__input_name').value;
  let jobInput = document.querySelector('.popup__input_status').value;
  
  name.textContent = nameInput;
  status.textContent = jobInput;
  close();
}

formElement.addEventListener('submit', formSubmitHandler); 