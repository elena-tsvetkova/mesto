export const openProfileFormButton = document.querySelector('.profile__button-edit');
// export const profileName = document.querySelector('.profile__name');
// export const profileStatus = document.querySelector('.profile__status');
export const profileInfo = {
  profileName: '.profile__name',
  profileStatus: '.profile__status'
}
export const popupProfileForm = document.querySelector('.popup__form-profile');
export const popupProfile = document.querySelector('.popup-profile');
export const namePopup = document.querySelector('.popup__input_type_name');
export const jobPopup = document.querySelector('.popup__input_type_job');

export const newImage = document.querySelector('.popup-new-image');
export const newImageFormGeneral = newImage.querySelector('.popup__form')
export const nameImage = document.querySelector('.popup__input_type_title');
export const linkImage = document.querySelector('.popup__input_type_link');
export const addImage = document.querySelector('.profile__add-button');
export const popupformAddCard = document.querySelector('.popup__form-new-image');

export const cardContainer = document.querySelector('.elements');
export const popupBigImage = document.querySelector('.popup-big-image');
export const popupBigImageCloseButton = document.querySelector('.popup-big-image__close');

export const popups = document.querySelectorAll('.popup');

export const elementsCardsContainer = document.querySelector('.element__image');

export const initialCards = [
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

  export const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    buttonSelector: '.popup__button',
    inactiveButtonClass: 'form__submit_inactive', // неактивная кнопка серый цвет
    inputErrorClass: 'form__input-error_active', //  сообщение об ошибке
    errorClass: 'form__input_type_error' //красное подчеркивание
};