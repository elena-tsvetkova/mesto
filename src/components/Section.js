export class Section {
  constructor({ data, renderer}, containerSelector) {
    this._initialArray = data;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
    this._renderer = renderer;
  }

  renderItems (cards) {
    cards.forEach( (item) => { this._renderer(item) });
}

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
} 