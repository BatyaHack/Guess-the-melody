import AbstractView from '../view.js';
import data from '../models/static.js';
import {convertTime} from '../utils.js';

export default class ResultView extends AbstractView {
  constructor(result = 0, winnerProcent) {
    super();
    this.result = result;
    this.winnerProcent = winnerProcent;
  }

  // стоит ли переделывать дату из секунд в минуты внтури view
  // так как это логика. Но она больше относится к пред, а не к презентеру
  // import untils convertTime

  _getCorrectTime() {
    return convertTime(this.result.time);
  }

  get template() {
    let html = null;
    if (this.result.life) { // win
      html = `<h2 class="title">${data.result.win.title}</h2>
      <div class="main-stat">За&nbsp;${this._getCorrectTime().min}:${this._getCorrectTime().sec}&nbsp;минуты<br>вы&nbsp;отгадали ${this.result.score}&nbsp;мелодии</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.winnerProcent}%&nbsp;игроков</span>`;
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
