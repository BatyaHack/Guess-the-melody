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
      [ControllerID.GAME]: new Game(),
      [ControllerID.RESULT]: new Result(),
    };

    window.onhashchange = () => {
      this.changeController(getControllerFromHash(location.hash));
    };

    this.changeController(getControllerFromHash(location.hash));
  }

  changeController(route = ``) {
    switch (route) {
      case ControllerID.WELCOME:
        this.routes[route].init();
        break;
      case ControllerID.GAME:
        this.routes[route].init(); // тут дата
        break;
      case ControllerID.RESULT:
        this.routes[route].init(this.stastData, this.winnerProcent); // и тут дата и стата
        break;
    }
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
