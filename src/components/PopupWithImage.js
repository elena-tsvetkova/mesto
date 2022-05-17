import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor (popup) {
        super (popup);
        this._image = this._popup.querySelector('.popup-big-image__opened');
        this._imageName = this._popup.querySelector('.popup-big-image__title');
    }

    open (name, link) {
        this._image.src = link;
        this._image.alt = name;
        this._imageName.textContent = name;
        super.open();
    }
}