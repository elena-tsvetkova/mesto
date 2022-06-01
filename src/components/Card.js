export class Card {
  constructor ({data, handleCardClick, handleLikeClick, handleConfirmDelete}, template, api, userId) {
    this._templateSelector = template;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes
    this._id = data._id
    this._userId = userId
    this._ownerId = data.owner._id
    this._api = api;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick =  handleLikeClick;
    this._handleConfirmDelete = handleConfirmDelete
    this._titlePopupBigImage = document.querySelector('.popup-big-image__title');
    this._popupBigImage = document.querySelector('.popup-big-image');
    this._picturePopupBigImage = document.querySelector('.popup-big-image__opened');
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
  }

    generateCard() {
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
 
    if(this._likes.find((obj) => this._userId === obj._id)) {
      this._element.querySelector('.element__like').classList.add('element__like-activ')
    }

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => { this._handleLikeClick()})
    this._removal.addEventListener('click', () => {this._handleConfirmDelete()})
    this._imageNew.addEventListener('click', () => { this._handleCardClick(this._name, this._link) })
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  handleLikeCard() {
    const likeButton = this._element.querySelector('.element__like')
    const likeCount = this._element.querySelector('.element__like-count')

    if(!(likeButton.classList.contains('element__like-activ'))) {
      this._api.like(this._id)
        .then((data) => {
          likeButton.classList.add('element__like-activ')
          likeCount.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this._api.dislike(this._id)
        .then((data) => {
          likeButton.classList.remove('element__like-activ')
          likeCount.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}