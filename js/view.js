import {getElementFromTemplate} from './utils.js';

export default class AbstractView {

  get template() {
    throw new Error(`This abstract class`);
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {

  }

  get element() {
    // Тут мы используем ленивые вычесления
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
