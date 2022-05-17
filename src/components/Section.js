export class Section {
  constructor({ data, renderer}, container) {
    this._initialArray = data;
    this._container = container;
    this._renderer = renderer;
  }

  renderItems () {
    this._initialArray.forEach( (item) => { this._renderer(item) });
}

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
} 