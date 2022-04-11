const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);
const obj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inactiveButtonClass: 'form__input_type_error',
  inputErrorClass: 'form__input-error_active',
  errorClass: 'form__input-error'
};



const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inactiveButtonClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.inputErrorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector('obj.errorClass');
  inputElement.classList.remove(obj.inactiveButtonClass);
  obj.errorClass.classList.remove(obj.inputErrorClass);
 
  errorElement.textContent = '';
}; 



const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}; 
 
formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  })
}; 

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.buttonSelector);

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
}; 

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inactiveButtonClass: 'form__input_type_error',
  inputErrorClass: 'form__input-error_active',
  errorClass: 'form__input-error'
})