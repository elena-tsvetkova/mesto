import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
    constructor ({ submitCallback }, popup) {
        super (popup);
        this._submitCallback = submitCallback;

        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.form__input');

        this._popupButton = this._formElement.querySelector('.popup__button');
        this._popupButtonTextContent = this._popupButton.textContent;
    }
  
    _getInputValues () {
        this._formValues = {};
        this._inputList.forEach (input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners () {
        this._formElement.addEventListener('submit', () => {
            this._submitCallback (this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        super.close();
        this._formElement.reset();
    }
    
    renderLoading(isLoading) {
        if(isLoading) {
          this._popupButton.textContent = 'Сохранение...'
        } else {
          this._popupButton.textContent = this._popupButtonTextContent
        }
      }
} 