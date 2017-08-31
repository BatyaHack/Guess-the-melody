import AbstractView from '../view.js';
import data from '../models/static.js';

export default class ResultView extends AbstractView {
  constructor(result = 0) {
    super();
    this.result = result;
  }

  get template() {
    let html = null;

    if (this.result.life) { // win
      html = `<h2 class="title">${data.result.win.title}</h2>
      <div class="main-stat">${data.result.win.stats}</div>
      <span class="main-comparison">${data.result.win.description}</span>`;
    } else { // losse
      html = `<h2 class="title">${data.result.loss.title}</h2>
      <div class="main-stat">${data.result.loss.description}</div>`;
    }

    return `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>${data.logo}</h1></section>
      ${html}
      <span role="button" tabindex="0" class="main-replay">${data.buttons.repeatButton}</span>
    </section>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, () => {
      this.replayGame();
    });
  }

  replayGame() {

  }
}
