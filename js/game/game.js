import {randomValue, getRandomMusic} from '../utils.js';
import {renderInMain} from '../modules/ScreenManager.js';
import music from '../models/music.js';
import stats from '../models/gameStats.js';
import ArtistView from './artist--view.js';
import GenreView from './genre--view.js';
import {setLive, setScore} from '../models/mainLogic.js';

class Game {
  constructor(gameStats = stats) {
    this.getRandomView();
    this.gameStats = gameStats;
  }

  getRandomView() {
    if (randomValue(0, 2)) {
      this._SHOW_ANSWERS = 3;
      this.view = new ArtistView(getRandomMusic(this._SHOW_ANSWERS));
    } else {
      this._SHOW_ANSWERS = 4;
      this.view = new GenreView(getRandomMusic(this._SHOW_ANSWERS));
    }
  }

  setEventCheckBox() {
    this.view.changeInput = () => {
      this.view.ansverButton.disabled = !this.view.answers.find((answer) => answer.checked === true);
      if (this.view.ansverButton.disabled) {
        this.view.ansverButton.classList.add(`genre-answer-send--disable`);
      } else {
        this.view.ansverButton.classList.remove(`genre-answer-send--disable`);
      }
    };
  }

  init() {
    this.view.nextLevel = (evt) => {
      evt.preventDefault();
      console.log(evt.target);
    };

    if (this.view.changeInput !== undefined) {
      this.setEventCheckBox();
    }

    renderInMain(this.view.element);

    // БРЕЕЕЕЕЕЕД
    const countPlayer = document.querySelectorAll(`.player-wrapper`);
    if (countPlayer.length === 1) {
      window.initializePlayer(document.querySelector(`.player-wrapper`), this.rightAnswer.resSrc);
    } else {
      countPlayer.forEach((elem, index, arr) => {
        window.initializePlayer(elem, this.dataSong[index].resSrc);
      });
    }

  }
}
const game = new Game();
export default game;
