 import {FormValidator} from '../components/FormValidator.js';
 import {Card} from '../components/Card.js';
 import {Section} from '../components/Section.js';
 import { PopupWithImage } from '../components/PopupWithImage.js';
 import { PopupWithForm } from '../components/PopupWithForm.js';
 import { UserInfo } from '../components/UserInfo.js';
 import { 
  openProfileFormButton,
//   profileName,
//   profileStatus,
  profileInfo,
  popupProfileForm,
  popupProfile,
  namePopup,
  jobPopup,
  newImage,
  newImageFormGeneral,
  nameImage,
  linkImage,
  addImage,
  popupformAddCard,
  cardContainer,
  popupBigImage,
  popupBigImageCloseButton,
  popups,
  initialCards,
  settings
 } from '../utils/constants.js';

const editProfileValidate = new FormValidator (settings, popupProfileForm);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (settings, popupformAddCard);
addProfileValidate.enableValidation();

// const closeByEscape = (evt) => {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened')
//         closePopup(openedPopup)
//     }
// }




// const creatCard = new Section ({
//   data: initialCards,
//   renderer: (item) => {
//     const cardFromArray = createNewCard (item);
//     creatCard.addItem(cardFromArray);
//   }
//   }, elementsCardsContainer );
// creatCard.renderItems();

// export function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keyup', closeByEscape);
// }

// function closePopup(element) {
//     element.classList.remove('popup_opened');
//     document.removeEventListener('keyup', closeByEscape);
// }

// function insertCard(cardElement) {
    // cardContainer.prepend(cardElement);
// }


// function createCard(name, link) {
//      const card = new Card('.element-template', name, link);
//      return card.generateCard();
// }

// function handleAddCardFormSubmit(evt) {
//     evt.preventDefault();
//     insertCard(createCard(nameImage.value, linkImage.value));
//     closePopup(newImage);
//     popupformAddCard.reset();
// }

const functionBigImagePopup = new PopupWithImage (popupBigImage);
functionBigImagePopup.setEventListeners();

const createNewCard = function creatNewCard (data) {
    const card = new Card ({data,
      handleCardClick: (name, link) => {
        functionBigImagePopup.open(name, link);
      }
    },  cardContainer);
    const cardElement = card.generateCard();
    return cardElement;
  }
  
  const creatCard = new Section ({
    data: places,
    renderer: (item) => {
      const cardFromArray = createNewCard (item);
      creatCard.addItem(cardFromArray);
    }
    }, elementsCardsContainer );
  creatCard.renderItems();

const createUserInfo = new UserInfo(profileInfo);

function editProfile() {
    createUserInfo.getUserInfo();
    editProfileValidate.toggleButtonState();
    popupWithFormEdit.open();
  }

const popupWithFormEdit = new PopupWithForm (
    {callbackSubmit: (data) => {
        createUserInfo.setUserInfo(data);
        popupWithFormEdit.close();
    }}, popupProfile);
 popupWithFormEdit.setEventListeners();

 profileEditButton.addEventListener('click', () => {
    editProfile () ;
  });


// function handleProfileFormSubmit(evt) {
//     evt.preventDefault();
//     profileName.textContent = namePopup.value;
//     profileStatus.textContent = jobPopup.value;
//     closePopup(popupProfile);
// }

// openProfileFormButton.addEventListener('click', () => {
//     namePopup.value = profileName.textContent
//     jobPopup.value = profileStatus.textContent
//     editProfileValidate.resetValidation()
//     openPopup(popupProfile)
// })

//       popups.forEach((popup) => {
//           popup.addEventListener('mousedown', (evt) => {
//               if (evt.target.classList.contains('popup_opened')) {
//                   closePopup(popup)
//               }
//               if (evt.target.classList.contains('popup__close')) {
//                 closePopup(popup)
//               }
//           })
//       }) 


// popupProfileForm.addEventListener('submit', handleProfileFormSubmit);


addImage.addEventListener('click', () => {
    addProfileValidate.resetValidation()
    openPopup(newImage)
    newImageFormGeneral.reset()
 });

initialCards.forEach(function (element) {
    insertCard(createCard(element.name, element.link));
})

popupformAddCard.addEventListener('submit', handleAddCardFormSubmit);