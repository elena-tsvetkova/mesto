let element = document.querySelector('.profile__button-edit');

function showClick() {
  document.querySelector('.popup_opened').style.display = 'block';
}

element.addEventListener('click', showClick); 

let elementClose = document.querySelector('.popup__close');

function close() {
  document.querySelector('.popup_opened').style.display = 'none';
}

elementClose.addEventListener('click', close); 

