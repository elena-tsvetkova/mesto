import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
    constructor ({ submitCallback }, popup) {
        super (popup);
        this._submitCallback = submitCallback;

        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.form__input');
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
} 