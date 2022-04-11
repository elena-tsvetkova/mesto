const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);
const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit',
  inactiveButtonClass: 'form__input_type_error',
  inputErrorClass: 'form__input-error_active',
  errorClass: 'form__input-error'
};



const showInputError = (formElement, inputElement, errorMessage) => {
  inputElement.classList.add(settings.inactiveButtonClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement)
  {errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');}
};

const hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove('form__input_type_error');
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  }
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
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.buttonSelector);

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
}; 

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation(settings)