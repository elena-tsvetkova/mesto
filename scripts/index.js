const openProfileFormButton = document.querySelector('.profile__button-edit');
const elementClose = document.querySelector('.popup__close-profil');
const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');
const formElement = document.querySelector('.popup__form-profile');
const popup = document.querySelector('.popup-profile');
const namePopup = document.querySelector('.popup__input_type_name');
const jobPopup = document.querySelector('.popup__input_type_job');

const newImage = document.querySelector('.popup-new-image');
const nameImage = document.querySelector('.popup__input_type_title');
const linkImage = document.querySelector('.popup__input_type_link');
const addImage = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-add');
const formImage = document.querySelector('.popup__form-new-image');

function popupOpen() {
 popup.classList.add('popup_opened')
 namePopup.value = name.textContent
 jobPopup.value = status.textContent
}

openProfileFormButton.addEventListener('click', popupOpen); 

function close() {
  popup.classList.remove('popup_opened')
}

elementClose.addEventListener('click', close)

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameInput = namePopup.value;
  const jobInput = jobPopup.value;  
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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
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

const link = document.querySelector('.element__image');
const title = document.querySelector('.element__title');
const card = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content;

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__title').textContent = element.name;  
  card.append(cardElement)
})
 
let bigImage = document.querySelector('.popup-big-image');

function formSubmitImage(evt) {
  evt.preventDefault();  
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__image').src = linkImage.value;
  cardElement.querySelector('.element__title').textContent = nameImage.value;
  card.prepend(cardElement);

  const like = document.querySelector('.element__like');
  like.addEventListener( 'click', () => { like.classList.toggle('element__like-activ') })

  const removal = document.querySelector('.element__trash');
  removal.addEventListener( 'click', () => { removal.closest('.element').remove() })

  const imageNew = document.querySelector('.element__image');
  imageNew.addEventListener( 'click',() => {
    bigImage.classList.add('popup_opened'); 
    bigOpened.src = imageNew.src;
    titleBig.textContent = imageNew.closest('.element').querySelector('.element__title').textContent
  })

  closeAdd();
}

formImage.addEventListener('submit', formSubmitImage); 

const likeList = document.querySelectorAll('.element__like');
likeList.forEach(function (like) {
like.addEventListener( 'click', () => { like.classList.toggle('element__like-activ') })
})


const removalList = document.querySelectorAll('.element__trash');
removalList.forEach(function (removal) {
removal.addEventListener( 'click', () => { removal.closest('.element').remove() })
})

const imageOpenedList = document.querySelectorAll('.element__image');
const bigOpened = document.querySelector('.popup-big-image__opened');
const titleBig = document.querySelector('.popup-big-image__title');


imageOpenedList.forEach(function (imageOpened){
  imageOpened.addEventListener( 'click',() => {
  bigImage.classList.add('popup_opened'); 
  bigOpened.src = imageOpened.src;
  titleBig.textContent = imageOpened.closest('.element').querySelector('.element__title').textContent
})
})

const bigClose = document.querySelector('.popup-big-image__close');

function closeBigImage() {
  bigImage.classList.remove('popup_opened')
}

bigClose.addEventListener('click', closeBigImage);



