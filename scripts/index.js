const openProfileFormButton = document.querySelector('.profile__button-edit');
const elementClose = document.querySelector('.popup__close-profil');
const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');
const popupProfileForm = document.querySelector('.popup__form-profile');
const popup = document.querySelector('.popup-profile');
const namePopup = document.querySelector('.popup__input_type_name');
const jobPopup = document.querySelector('.popup__input_type_job');

const newImage = document.querySelector('.popup-new-image');
const nameImage = document.querySelector('.popup__input_type_title');
const linkImage = document.querySelector('.popup__input_type_link');
const addImage = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-add');
const popupformAddCard = document.querySelector('.popup__form-new-image');

function openPopup (popup) {
  popup.classList.add('popup_opened');
} 

openProfileFormButton.addEventListener('click', () => {openPopup(popup)   
  namePopup.placeholder = name.textContent
 jobPopup.placeholder = status.textContent
})

function  closePopup (element) {
  element.classList.remove('popup_opened');
} 

elementClose.addEventListener('click', () => {closePopup(popup)})

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = namePopup.value;
  status.textContent = jobPopup.value; 
  closePopup(popup);
  document.querySelector('.popup__form-profile').reset();
}

popupProfileForm.addEventListener('submit', handleProfileFormSubmit); 

 addImage.addEventListener('click', () => {openPopup(newImage)}); 
 
closeAddButton.addEventListener('click', () => {closePopup(newImage)})

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
 
const bigImage = document.querySelector('.popup-big-image');

function handleAddCardFormSubmit(evt) {
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
    openPopup(bigImage);
    bigOpened.src = imageNew.src;
    titleBig.textContent = imageNew.closest('.element').querySelector('.element__title').textContent
  })
  closePopup(newImage);
  document.querySelector('.popup__form-new-image').reset();
 }

popupformAddCard.addEventListener('submit', handleAddCardFormSubmit); 

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
  openPopup(bigImage);
  bigOpened.src = imageOpened.src;
  titleBig.textContent = imageOpened.closest('.element').querySelector('.element__title').textContent
})
})

const bigClose = document.querySelector('.popup-big-image__close');

bigClose.addEventListener('click', () => {closePopup(bigImage)});



