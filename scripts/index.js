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

const link = document.querySelector('.element__image');
const title = document.querySelector('.element__title');
const card = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content;
const bigImage = document.querySelector('.popup-big-image');
const bigClose = document.querySelector('.popup-big-image__close');

function openPopup (popup) {
  popup.classList.add('popup_opened');
} 

function  closePopup (element) {
  element.classList.remove('popup_opened');
} 

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = namePopup.value;
  status.textContent = jobPopup.value; 
  closePopup(popup);
  document.querySelector('.popup__form-profile').reset();
}

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const like = cardElement.querySelector('.element__like');
  const removal = cardElement.querySelector('.element__trash');
  const imageNew = cardElement.querySelector('.element__image');
  const bigOpened = document.querySelector('.popup-big-image__opened');
  const titleBig = document.querySelector('.popup-big-image__title');

  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__title').textContent = name;
  like.addEventListener( 'click', () => { like.classList.toggle('element__like-activ') })
  removal.addEventListener( 'click', () => { removal.closest('.element').remove() })
  imageNew.addEventListener( 'click',() => {
    openPopup(bigImage);
    bigOpened.src = imageNew.src;
    titleBig.textContent = imageNew.closest('.element').querySelector('.element__title').textContent
  })
  card.prepend(cardElement);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();  
  createCard(nameImage.value, linkImage.value)
  closePopup(newImage);
  document.querySelector('.popup__form-new-image').reset();
 }

openProfileFormButton.addEventListener('click', () => {openPopup(popup)   
  namePopup.placeholder = name.textContent
 jobPopup.placeholder = status.textContent
})
elementClose.addEventListener('click', () => {closePopup(popup)})
popupProfileForm.addEventListener('submit', handleProfileFormSubmit); 
addImage.addEventListener('click', () => {openPopup(newImage)}); 
closeAddButton.addEventListener('click', () => {closePopup(newImage)})

initialCards.forEach(function (element) {
  createCard(element.name, element.link)
})

popupformAddCard.addEventListener('submit', handleAddCardFormSubmit); 
bigClose.addEventListener('click', () => {closePopup(bigImage)});
