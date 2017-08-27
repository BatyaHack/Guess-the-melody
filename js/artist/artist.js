import ArtistView from './artist--view.js';
import Genre from '../genre/genre.js';
import {renderInMain} from '../modules/ScreenManager.js';
import music from '../models/music.js';
import {getRandomMusic, randomValue} from '../utils.js';

export default class Artist {
  constructor() {
    this.view = new ArtistView();
    this.SHOW_ANSWER = 3; // можно сделать передачу черз конструктор
  }

  init() {
    const randomMusic = getRandomMusic(music, this.SHOW_ANSWER);
    const rightAnswer = randomMusic[randomValue(0, this.SHOW_ANSWER)];

    // Немного не нравится кусок вот этого шаблона с данными в контроллере
    this.view.answerBlock = randomMusic.map((elem, index, arr) => {
      return `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${elem.trackID}" name="answer" value="${elem.trackID}" />
          <label class="main-answer" for="answer-${elem.trackID}">
            <img class="main-answer-preview" src="${elem.imgSrc}">
            ${elem.title}
          </label>
        </div>`;
    });

    renderInMain(this.view.element);

    window.initializeCountdown(this.view.element);
    window.initializePlayer(document.querySelector(`.player-wrapper`), rightAnswer.resSrc);

    this.view.nextLevel = () => {
      const genre = new Genre();
      genre.init();
    };
  }
}
