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

let cardNow = document.querySelector('.popup__input_type_title');
let cardSrc = document.querySelector('.popup__input_type_link');

let link = document.querySelector('.element__image');
let title = document.querySelector('.element__title');

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
  
 }
 
 addImage.addEventListener('click', popupNewImage); 
 
 function closeAdd() {
  newImage.classList.remove('popup_opened')
}

closeAddButton.addEventListener('click', closeAdd)

const  card= document.querySelector('.elements');

let cardTemplate = document.querySelector('.element-template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__title').textContent = element.name;
  

  card.append(cardElement)
})

function formSubmitImage(evt) {
  evt.preventDefault();
  // let nameCard = cardNow.value;
  // let cardLink = cardSrc.value;

  
  // initialCards.unshift({'nameCard', 'cardLink'})
  
  // name.textContent = nameInput;
  // status.textContent = jobInput;
  close();
}

formElement.addEventListener('submit', formSubmitImage); 