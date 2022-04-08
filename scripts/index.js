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


// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}; 

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('form__submit_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('form__submit_inactive');
  }
}; 




const overlayArr = document.querySelectorAll('.popup')

// overlayArr.forEach (function (overlay) {
// overlay.addEventListener('click', function() {
//   document.querySelector('.popup_opened').classList.remove('popup_opened');
//   this.classList.remove('popup_opened');
// })
// })

// const div = document.querySelector('.popup__common');
 
// document.addEventListener('click', (e) => {
// 	const withinBoundaries = e.composedPath().includes(div);
//  console.log(1)
// 	if (! withinBoundaries ) {
//     console.log(2)
// 		div.classList.remove('popup_opened');  // скрываем элемент т к клик был за его пределами
// 	}
// })