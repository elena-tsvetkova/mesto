export class Card {
  constructor ({data, handleCardClick}, template, userId) {
    this._templateSelector = template;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes
    this._userId = userId
    this._ownerId = data.owner._id
    this._handleCardClick = handleCardClick;
    this._titlePopupBigImage = document.querySelector('.popup-big-image__title');
    this._popupBigImage = document.querySelector('.popup-big-image');
    this._picturePopupBigImage = document.querySelector('.popup-big-image__opened');
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
  }

    generateCard() {
      console.log(this._ownerId, this._userId)
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.element__like');
    this._likeCount = this._element.querySelector('.element__like-count');
    this._removal = this._element.querySelector('.element__trash');
    this._imageNew = this._element.querySelector('.element__image');
    this._titleImage = this._element.querySelector('.element__title')
    this._imageNew.src = this._link;
    this._titleImage.textContent = this._name;
    this._imageNew.alt = this._name;
    this._likeCount.textContent = this._likes.length; 

    if(!(this._ownerId === this._userId)) {
      this._removal.style.display = 'none'
    }
 
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => { this._handleLikeCard()})
    this._removal.addEventListener('click', () => {this._removeCard()})
    this._imageNew.addEventListener('click', () => { this._handleCardClick(this._name, this._link) })
  }
  
  _handleLikeCard() {
    this._like.classList.toggle('element__like-activ');
  }

  _removeCard() {

    this._element.remove();
    this._element = null;

  }

}