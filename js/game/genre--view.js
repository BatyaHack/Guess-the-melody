import AbstractView from '../view.js';
import data from '../models/static.js';

export default class GenreView extends AbstractView {
  constructor(dataSong) {
    super();
    this.dataSong = dataSong;
  }

  get template() {
    const titleGenre = `<h2 class="title">Выберете ${this.dataSong.rightAnswer.ganre}</h2>`;

    const answer = this.dataSong.randomMusic.map((elem, index, arr) => {
      return `<div class="genre-answer">
              <div class="player-wrapper"></div>
              <input type="checkbox" name="answer" value="${elem.ganre}" id="${elem.trackID}">
              <label class="genre-answer-check" for="${elem.trackID}"></label>
            </div>`;
    });

    const nextButton = `<button class="genre-answer-send" type="submit">${data.buttons.answerButton}</button>`;

    const formGenre = answer.join(``);

    return `<section class="main main--level main--level-genre">
      ${titleGenre}
      <form class="genre">
      ${formGenre}
      ${nextButton}
      </form>
    </section>`;
  }

  bind() {
    this.ansverButton = this.element.querySelector(`.genre-answer-send`);
    this.ansverButton.classList.add(`genre-answer-send--disable`);
    this.ansverButton.disabled = true;

    this.ansverButton.addEventListener(`click`, (evt) => {
      this.nextLevel(evt);
    });

    this.answers = [...this.element.querySelectorAll(`input[name='answer']`)];
    this.answers.forEach((elem, index, arr) => {
      elem.addEventListener(`change`, (evt) => {
        this.changeInput();
      });
    });
  }

  nextLevel(evt) {

  }

  changeInput() {

  }

  chekedAnswer(evt) {
    const allNeedAnswerCheck = this.answers.filter((elem, index, arr) => {
      return (elem.value === this.dataSong.rightAnswer.ganre) && elem.checked;
    });
    const allRigrhAnswer = this.dataSong.randomMusic.filter((elem, index, arr) => {
      return elem.ganre === this.dataSong.rightAnswer.ganre;
    });
    if (allNeedAnswerCheck.length === allRigrhAnswer.length) {
      return true;
    }
    return false;
  }

  initPlayer() {
    this.element.querySelectorAll(`.player-wrapper`).forEach((elem, index, arr) => {
      window.initializePlayer(elem, this.dataSong.randomMusic[index].resSrc);
    });
  }
}
