let element = document.querySelector('.profile__button-edit');
let elementClose = document.querySelector('.popup__close');
let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');
let formElement = document.querySelector('.popup__form');
const popup = document.querySelector('.popup')
let namePopup = document.querySelector('.popup__input_type_name');
let jobPopup = document.querySelector('.popup__input_type_job');

function popupOpen() {
 popup.classList.add('popup_opened')
 namePopup.value = name.textContent
 jobPopup.value = status.textContent
}

element.addEventListener('click', popupOpen); 


function close() {
  popup.classList.remove('popup_opened')
}

elementClose.addEventListener('click', close)




function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = namePopup.value;
  let jobInput = jobPopup.value;
  
  name.textContent = nameInput;
  status.textContent = jobInput;
  close();
}

formElement.addEventListener('submit', formSubmitHandler); 