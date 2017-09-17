import Welcome from './welcome/welcome.js';
import Game from './game/game.js';
import Result from './result/result.js';
import Timer from './timer/timer.js';
import {statistic, getResultGame} from './models/mainLogic.js';
import Model from './model.js';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`,
};

const getControllerFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {
  }

  static changePresenter(hash = ``) {
    switch (hash) {
      case ControllerID.GAME:
        Game.chekEndGame();
        break;
      case ControllerID.RESULT:
        Result.init(this.stastData, this.winnerProcent);
        break;
      default:
        Welcome.init();
        break;
    }
  }

  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }
  static showGame() {
    Timer.init();
    location.hash = ControllerID.GAME;
  }
  static showStats(stats) {
    Timer.destroy();
    this.stastData = stats;
    this.winnerProcent = getResultGame(statistic, this.stastData);
    location.hash = ControllerID.RESULT;
  }

  static init() {
    window.onhashchange = () => {
      this.changePresenter(getControllerFromHash(location.hash));
    };
    // для того что бы сразу подгружать с url
    this.changePresenter(getControllerFromHash(location.hash));
  }

  static checkData() {
    this.model = new class extends Model {
      urlRead() {
        return `http://backendformelody/users`;
      }
    }();
    this.model.load()
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.error(`Ups! U have porblems`);
      });
  }
}

App.init();
App.checkData();
export default App;
