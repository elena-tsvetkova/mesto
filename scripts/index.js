let element = document.querySelector('.profile__button-edit');
let elementClose = document.querySelector('.popup__close');
let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');
let formElement = document.querySelector('.popup__form');
const popup = document.querySelector('.popup')

function popupOpen() {
 popup.classList.add('popup_opened')
 document.querySelector('.popup__input_name').value = name.textContent
 document.querySelector('.popup__input_status').value = status.textContent
}

element.addEventListener('click', popupOpen); 


function close() {
  popup.classList.remove('popup_opened')
}

elementClose.addEventListener('click', close)




function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__input_name').value;
  let jobInput = document.querySelector('.popup__input_status').value;
  
  name.textContent = nameInput;
  status.textContent = jobInput;
  close();
}

formElement.addEventListener('submit', formSubmitHandler); 