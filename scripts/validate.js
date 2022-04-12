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

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('form__submit_inactive');
        buttonElement.disabled = true
    } else {
        buttonElement.classList.remove('form__submit_inactive');
        buttonElement.disabled = false
    }
};

const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.buttonSelector);

    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, settings);
            toggleButtonState(inputList, buttonElement);
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