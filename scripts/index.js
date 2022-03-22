let element = document.querySelector('.profile__button-edit');
let elementClose = document.querySelector('.popup__close-profil');
let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');
let formElement = document.querySelector('.popup__form-profile');
const popup = document.querySelector('.popup__profile');
let namePopup = document.querySelector('.popup__input_type_name');
let jobPopup = document.querySelector('.popup__input_type_job');
const newImage = document.querySelector('.popup__new-image');
const nameImage = document.querySelector('.popup__input_type_title');
const linkImage = document.querySelector('.popup__input_type_link');
const addImage = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-add');

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

function popupNewImage() {
  newImage.classList.add('popup_opened')
  nameImage.value = title.textContent
  linkImage.value = link.textContent
 }
 
 addImage.addEventListener('click', popupNewImage); 
 
 function closeAdd() {
  newImage.classList.remove('popup_opened')
}

closeAddButton.addEventListener('click', closeAdd)