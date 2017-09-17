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
    this.model = new class extends Model {
      urlRead() {
        return `http://backendformelody/users`;
      }
    }();

    this.model.load()
      .then((data) => this.setup(data))
      // .catch(() => console.error(`Ups! U have porblems`));
  }

  setup(data) {
    this.routes = {
      [ControllerID.WELCOME]: new Welcome(),
      [ControllerID.GAME]: new Game(), // передать игровую дату
      [ControllerID.RESULT]: new Result(), // передать статистику
    };

    window.onhashchange = () => {
      this.changeController(getControllerFromHash(location.hash));
    };

    this.changeController(getControllerFromHash(location.hash));
  }

  changeController(route = ``) {
    this.routes[route].init();
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }
  showGame() {
    Timer.init();
    location.hash = ControllerID.GAME;
  }
  showStats(stats) {
    Timer.destroy();
    this.stastData = stats;
    this.winnerProcent = getResultGame(statistic, this.stastData);
    location.hash = ControllerID.RESULT;
  }
}

export default new App();
