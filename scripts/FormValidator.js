export class FormValidator {
  constructor (settings, formElement) {
    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._buttonSelector = settings._buttonSelector;
    this._formSelector = settings._formSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._errorClass = settings.errorClass;

}

_showInputError = (formElement, inputElement, errorMessage) => {
  inputElement.classList.add(this._errorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add('form__input-error_active');
  }
}

_hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove(this._errorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
      errorElement.classList.remove('form__input-error_active');
      errorElement.textContent = '';
  }
}

_isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      _showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      _hideInputError(formElement, inputElement);
  }
}

_hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => { return !inputElement.validity.valid })
}

_toggleButtonState = (inputList, buttonElement) => {
  if (_hasInvalidInput(inputList)) {
    disableButtonElement(buttonElement)
  } else {
    activeButtonElement(buttonElement)
  }
}

_setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
  const buttonElement = formElement.querySelector(this._buttonSelector);
  _toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          _isValid(formElement, inputElement);
          _toggleButtonState(inputList, buttonElement);
      });
  });
}

enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => { evt.preventDefault() });
      _setEventListeners(formElement);
  });
}

}