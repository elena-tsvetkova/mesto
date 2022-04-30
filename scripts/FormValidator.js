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

_showInputError = (formElement, inputElement, errorMessage) => {
  inputElement.classList.add(this._errorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add('form__input-error_active');
  }
}

hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove(this._errorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
      errorElement.classList.remove('form__input-error_active');
      errorElement.textContent = '';
  }
}

_isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      this.hideInputError(formElement, inputElement);
  }
}

_hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => { return !inputElement.validity.valid })
}

_disableButtonElement = (buttonElement) => {
  buttonElement.classList.add(this._inactiveButtonClass);
  buttonElement.disabled = true;
}
  
_activeButtonElement = (buttonElement) => {
  buttonElement.classList.remove(this._inactiveButtonClass);
  buttonElement.disabled = false;
}

toggleButtonState = () => {
  if (this._hasInvalidInput(this._inputList)) {
    this._disableButtonElement(this._buttonElement)
  } else {
    this._activeButtonElement(this._buttonElement)
  }
}

_setEventListeners = (formElement) => {
  this.toggleButtonState();
  this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          this._isValid(formElement, inputElement);
          this.toggleButtonState();
      });
  });
}

enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => { evt.preventDefault() });
      this._setEventListeners(formElement);
  });
}

}