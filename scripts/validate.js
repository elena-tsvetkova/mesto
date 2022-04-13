const formElement = document.querySelector('.form');


const showInputError = (formElement, inputElement, errorMessage, settings) => {
    inputElement.classList.add(settings.errorClass);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add('form__input-error_active');
    }
};

const hideInputError = (formElement, inputElement, settings) => {
    inputElement.classList.remove('form__input_type_error');
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (errorElement) {
        errorElement.classList.remove('form__input-error_active');
        errorElement.textContent = '';
    }
};

const isValid = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
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

const disableButtonElement = (buttonElement, settings) => {
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.disabled = true;
}

const activeButtonElement = (buttonElement, settings) => {
  buttonElement.classList.remove(settings.inactiveButtonClass);
  buttonElement.disabled = false;
}

const toggleButtonState = (inputList, buttonElement, settings) => {
    if (hasInvalidInput(inputList)) {
      disableButtonElement(buttonElement, settings)
    } else {
      activeButtonElement(buttonElement, settings)
    }
};

const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.buttonSelector);
    toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, settings);
            toggleButtonState(inputList, buttonElement, settings);
        });
    });
};

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, settings);
    });
};

enableValidation(settings)