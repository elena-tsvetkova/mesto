export class Popup {
  constructor (popupSelector) {
      this._popup = popupSelector;
  }

  open () {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener ('keyup', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened')
      this.close(openedPopup) 
      }
  }

  setEventListeners () {
      const closeButton = this._popup.querySelector('.popup__close')
      closeButton.addEventListener('click', () => { this.close()});
      this._popup.addEventListener('click', (evt) => {
          if (evt.target.classList.contains('popup_opened')) {
              this.close();
          }
      });
  }
}