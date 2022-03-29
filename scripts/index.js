const openProfileFormButton = document.querySelector('.profile__button-edit');
const popupProfileCloseButton = document.querySelector('.popup__close-profil');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupProfileForm = document.querySelector('.popup__form-profile');
const popupProfile = document.querySelector('.popup-profile');
const namePopup = document.querySelector('.popup__input_type_name');
const jobPopup = document.querySelector('.popup__input_type_job');

const newImage = document.querySelector('.popup-new-image');
const nameImage = document.querySelector('.popup__input_type_title');
const linkImage = document.querySelector('.popup__input_type_link');
const addImage = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = document.querySelector('.popup__close-add');
const popupformAddCard = document.querySelector('.popup__form-new-image');

const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content;
const popupBigImage = document.querySelector('.popup-big-image');
const popupBigImageCloseButton = document.querySelector('.popup-big-image__close');

const picturePopupBigImage = document.querySelector('.popup-big-image__opened');
const titlePopupBigImage = document.querySelector('.popup-big-image__title');

function openPopup(popupProfile) {
  popupProfile.classList.add('popup_opened');
} 

function closePopup(element) {
  element.classList.remove('popup_opened');
} 

function insertCard(cardElement) {
  cardContainer.prepend(cardElement);
}  

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = namePopup.value;
  profileStatus.textContent = jobPopup.value; 
  closePopup(popupProfile);
}

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const like = cardElement.querySelector('.element__like');
  const removal = cardElement.querySelector('.element__trash');
  const imageNew = cardElement.querySelector('.element__image');
  
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').alt = name;
  like.addEventListener( 'click', () => { like.classList.toggle('element__like-activ') })
  removal.addEventListener( 'click', () => { removal.closest('.element').remove() })
  imageNew.addEventListener( 'click',() => {
    openPopup(popupBigImage);
    picturePopupBigImage.src = link;
    picturePopupBigImage.alt = name;
    titlePopupBigImage.textContent = name;
  })
  return cardElement;  
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault(); 
  const cardElement = createCard(nameImage.value, linkImage.value);
  insertCard(cardElement);
  closePopup(newImage);
  popupformAddCard.reset();
}

openProfileFormButton.addEventListener('click', () => {openPopup(popupProfile)   
  namePopup.value = profileName.textContent
 jobPopup.value = profileStatus.textContent
})
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile))
popupProfileForm.addEventListener('submit', handleProfileFormSubmit); 
addImage.addEventListener('click', () => {openPopup(newImage)}); 
popupAddCardCloseButton.addEventListener('click', () => closePopup(newImage))

initialCards.forEach(function (element) {
  const cardElement = createCard(element.name, element.link);
  insertCard(cardElement);
})

popupformAddCard.addEventListener('submit', handleAddCardFormSubmit); 
popupBigImageCloseButton.addEventListener('click', () => closePopup(popupBigImage));
