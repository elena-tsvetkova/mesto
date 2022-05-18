export class Card {
  constructor ({data, handleCardClick}, template) {
    this._template = template;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._titlePopupBigImage = document.querySelector('.popup-big-image__title');
    this._popupBigImage = document.querySelector('.popup-big-image');
    this._picturePopupBigImage = document.querySelector('.popup-big-image__opened');
  }

  _getTemplate() {
    return document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
// TODO: убрать хардкод селекторов в константы
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

  _setEventListeners() {
    this._like.addEventListener('click', () => { this._like.classList.toggle('element__like-activ')})
    this._removal.addEventListener('click', () => { this._removal.closest('.element').remove() })
    this._imageNew.addEventListener('click', () => { this._handleCardClick(this._name, this._link) })
  }

}