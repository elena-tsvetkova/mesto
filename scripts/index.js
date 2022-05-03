 import {Card} from './Card.js';
 import {FormValidator} from './FormValidator.js'

const openProfileFormButton = document.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupProfileForm = document.querySelector('.popup__form-profile');
const popupProfile = document.querySelector('.popup-profile');
const namePopup = document.querySelector('.popup__input_type_name');
const jobPopup = document.querySelector('.popup__input_type_job');

const newImage = document.querySelector('.popup-new-image');
const newImageFormGeneral = newImage.querySelector('.popup__form')
const nameImage = document.querySelector('.popup__input_type_title');
const linkImage = document.querySelector('.popup__input_type_link');
const addImage = document.querySelector('.profile__add-button');
const popupformAddCard = document.querySelector('.popup__form-new-image');

const cardContainer = document.querySelector('.elements');
const popupBigImage = document.querySelector('.popup-big-image');
const popupBigImageCloseButton = document.querySelector('.popup-big-image__close');

const popups = document.querySelectorAll('.popup');

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

const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    buttonSelector: '.popup__button',
    inactiveButtonClass: 'form__submit_inactive', // неактивная кнопка серый цвет
    inputErrorClass: 'form__input-error_active', //  сообщение об ошибке
    errorClass: 'form__input_type_error' //красное подчеркивание
};


const editProfileValidate = new FormValidator (settings, popupProfileForm);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (settings, popupformAddCard);
addProfileValidate.enableValidation();

const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup)
    }
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closeByEscape);
}

function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeByEscape);
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
     const card = new Card('.element-template', name, link);
     return card.generateCard();
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    insertCard(createCard(nameImage.value, linkImage.value));
    closePopup(newImage);
    popupformAddCard.reset();
}

openProfileFormButton.addEventListener('click', () => {
    namePopup.value = profileName.textContent
    jobPopup.value = profileStatus.textContent
    editProfileValidate.resetValidation()
    openPopup(popupProfile)
})

      popups.forEach((popup) => {
          popup.addEventListener('mousedown', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  closePopup(popup)
              }
              if (evt.target.classList.contains('popup__close')) {
                closePopup(popup)
              }
          })
      }) 


popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

addImage.addEventListener('click', () => {
    addProfileValidate.resetValidation()
    openPopup(newImage)
    newImageFormGeneral.reset()
 });

initialCards.forEach(function (element) {
    insertCard(createCard(element.name, element.link));
})

popupformAddCard.addEventListener('submit', handleAddCardFormSubmit);

popupBigImageCloseButton.addEventListener('click', () => closePopup(popupBigImage));
