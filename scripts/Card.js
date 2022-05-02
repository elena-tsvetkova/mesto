import {openPopup} from './index.js'

export class Card {
  constructor (template, name, link) {
    this._template = template;
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    return document.querySelector(this._template).content.cloneNode(true);
  }

    generateCard() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.element__like');
    this._removal = this._element.querySelector('.element__trash');
    this._imageNew = this._element.querySelector('.element__image');
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;

    this._setEventListeners();
    return this._element;
  }

  _openPopupBigImage() {
    this._titlePopupBigImage = document.querySelector('.popup-big-image__title');
    this._popupBigImage = document.querySelector('.popup-big-image');
    this._picturePopupBigImage = document.querySelector('.popup-big-image__opened');
    this._picturePopupBigImage.src = this._link;
    this._picturePopupBigImage.alt = this._name;
    this._titlePopupBigImage.textContent = this._name;
    openPopup(this._popupBigImage)
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => { this._like.classList.toggle('element__like-activ')})
    this._removal.addEventListener('click', () => { this._removal.closest('.element').remove() })
    this._imageNew.addEventListener('click', () => { this._openPopupBigImage() })
  }

}