import AbstractView from '../view.js';
import data from '../models/static.js';

export default class GenreView extends AbstractView {
  get template() {

    const titleGenre = `<h2 class="title">${data.genre.title}</h2>`;

    const nextButton = `<button class="genre-answer-send" type="submit">${data.buttons.answerButton}</button>`;

    const formGenre = this.options.join(``);

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
}
