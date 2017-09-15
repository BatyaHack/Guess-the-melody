import {randomValue, getRandomMusic} from '../utils.js';
import {renderInMain} from '../modules/ScreenManager.js';
import stats from '../models/gameStats.js';
import ArtistView from './artist--view.js';
import GenreView from './genre--view.js';
import {setLive, setScore, setLevel} from '../models/mainLogic.js';
import App from '../main.js';
import Timer from '../timer/timer.js';

class Game {
  constructor(gameStats = stats) {
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

  minusLevel() {
    this.gameStats = setLevel(this.gameStats, this.gameStats.level - 1);
    return this.gameStats.level;
  }

  chekEndGame() {
    if (!this.gameStats.level || !this.gameStats.life) {
      this.gameStats.time = Timer.getGameTime();
      App.showStats(this.gameStats);
      this.gameStats = stats; // после оканчания игры обнавляю статистику на инит
    } else {
      this.getRandomView();
      this.init();
    }
  }

  init() {
    this.view.nextLevel = (evt) => {
      evt.preventDefault();
      if (this.view.chekedAnswer(evt.currentTarget)) {
        this.gameStats = setScore(this.gameStats, this.gameStats.score + 1);
      } else {
        this.gameStats = setLive(this.gameStats, this.gameStats.life - 1);
      }
      this.minusLevel(this.gameStats);
      this.chekEndGame();
    };

    if (this.view.changeInput) {
      this.setEventCheckBox();
    }

    this.view.initPlayer();

    renderInMain(this.view.element);
  }
}
const game = new Game();
export default game;
