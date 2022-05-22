export class Section {
  constructor({ data, renderer}, containerSelector) {
    this._initialArray = data;
    this._containerSelector = containerSelector;
    this._renderer = renderer;
  }

  renderItems () {
    this._initialArray.forEach( (item) => { this._renderer(item) });
}

  addItem(cardElement) {
    document.querySelector(this._containerSelector).prepend(cardElement);
  }
} 