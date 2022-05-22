import './index.css';
 import {FormValidator} from '../components/FormValidator.js';
 import {Card} from '../components/Card.js';
 import {Section} from '../components/Section.js';
 import { PopupWithImage } from '../components/PopupWithImage.js';
 import { PopupWithForm } from '../components/PopupWithForm.js';
 import { UserInfo } from '../components/UserInfo.js';
 import { 
  openProfileFormButton,
  profileInfo,
  popupProfileForm,
  popupProfileSelector,
  newImageSelector,
  addImage,
  popupformAddCard,
  cardContainerSelector,
  popupBigImageSelector,
  initialCards,
  settings,
  elementTemplateSelector,
  namePopup,
  jobPopup,
  } from '../utils/constants.js';
 

const editProfileValidate = new FormValidator (settings, popupProfileForm);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (settings, popupformAddCard);
addProfileValidate.enableValidation();

const functionBigImagePopup = new PopupWithImage (popupBigImageSelector);
functionBigImagePopup.setEventListeners();

const createNewCard = function creatNewCard (data) {
    const card = new Card ({data,
      handleCardClick: (name, link) => {
        functionBigImagePopup.open(name, link);
      }
    },  elementTemplateSelector);
    const cardElement = card.generateCard();
    return cardElement;
  }
  
  const creatCard = new Section ({
    data: initialCards,
    renderer: (item) => {
      const cardFromArray = createNewCard (item);
      creatCard.addItem(cardFromArray);
    }
    }, cardContainerSelector );
  creatCard.renderItems();

const createUserInfo = new UserInfo(profileInfo);

const popupWithFormEdit = new PopupWithForm (
  {submitCallback : (data) => {
      createUserInfo.setUserInfo(data);
      popupWithFormEdit.close();
  }}, popupProfileSelector);
popupWithFormEdit.setEventListeners();

function editProfile() {
    const userData = createUserInfo.getUserInfo();
    namePopup.value = userData.username
    jobPopup.value = userData.job
    editProfileValidate.resetValidation();
    popupWithFormEdit.open();
  }

openProfileFormButton.addEventListener('click', () => {editProfile()});


const popupWithFormAdd = new PopupWithForm (
    { submitCallback : (data) => {     
      const cardFromPopup = createNewCard (data);
      creatCard.addItem(cardFromPopup);
      popupWithFormAdd.close();
    }
  }, newImageSelector);
  popupWithFormAdd.setEventListeners();

  addImage.addEventListener('click', () => {
    addProfileValidate.resetValidation();
    popupWithFormAdd.open();
  });
