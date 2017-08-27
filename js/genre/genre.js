import GenreView from './genre--view.js';
import Result from '../result/result.js';
import {renderInMain} from '../modules/ScreenManager.js';
import music from '../models/music.js';
import {getRandomMusic, randomValue} from '../utils.js';


export default class Genre {
  constructor() {
    this.view = new GenreView();
    this.SHOW_NOTES = 4; // можно сделать передачу через конструктор
  }

  init() {
    const randomMusic = getRandomMusic(music, this.SHOW_NOTES);

    this.view.options = randomMusic.map((elem, index, arr) => {
      return `<div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="${elem.ganre}" id="${elem.trackID}">
          <label class="genre-answer-check" for="${elem.trackID}"></label>
        </div>`;
    });

    this.view.nextLevel = (evt) => {
      evt.preventDefault();
      const result = new Result(randomValue(0, 2));
      result.init();
    };

    this.view.changeInput = () => {
      this.view.ansverButton.disabled = !this.view.answers.find((answer) => answer.checked === true);
      if (this.view.ansverButton.disabled) {
        this.view.ansverButton.classList.add(`genre-answer-send--disable`);
      } else {
        this.view.ansverButton.classList.remove(`genre-answer-send--disable`);
      }
    };

    const allPlayers = (this.view.element.querySelectorAll(`.player-wrapper`));
    allPlayers.forEach((elem, index, array)=>{
      window.initializePlayer(elem, randomMusic[index].resSrc);
    });

    renderInMain(this.view.element);

  }
}
