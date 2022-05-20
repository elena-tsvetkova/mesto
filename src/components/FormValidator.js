export class FormValidator {
  constructor (settings, formElement) {
    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._buttonSelector = settings.buttonSelector;
    this._formSelector = settings.formSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._errorClass = settings.errorClass;

    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._buttonSelector);
}

_showInputError = (inputElement, errorMessage) => {
  inputElement.classList.add(this._errorClass);
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add('form__input-error_active');
  }
}

_hideInputError = (inputElement) => {
  inputElement.classList.remove(this._errorClass);
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
      errorElement.classList.remove('form__input-error_active');
      errorElement.textContent = '';
  }
}

_isValid = (inputElement) => {
  if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
  } else {
      this._hideInputError(inputElement);
  }
}

_hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => { return !inputElement.validity.valid })
}

_disableButtonElement = () => {
  this._buttonElement.classList.add(this._inactiveButtonClass);
  this._buttonElement.disabled = true;
}
  
_activeButtonElement = () => {
  this._buttonElement.classList.remove(this._inactiveButtonClass);
  this._buttonElement.disabled = false;
}

_toggleButtonState = () => {
  if (this._hasInvalidInput(this._inputList)) {
    this._disableButtonElement(this._buttonElement)
  } else {
    this._activeButtonElement(this._buttonElement)
  }
}

_setEventListeners = () => {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          this._isValid(inputElement);
          this._toggleButtonState();
      });
  });
}

resetValidation() {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => { this._hideInputError(inputElement) });
}

enableValidation = () => {
   this._form.addEventListener('submit', (evt) => { evt.preventDefault() });
   this._setEventListeners();
}

}