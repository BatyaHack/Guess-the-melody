import Welcome from './welcome/welcome.js';
import Game from './game/game.js';
import Result from './result/result.js';
import Timer from './timer/timer.js';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`,
};

const getControllerFromHash = (hash) => hash.replace(`#`, ``);

class App {

  static changePresenter(hash = ``) {
    switch (hash) {
      case ControllerID.GAME:
        Game.chekEndGame();
        break;
      case ControllerID.RESULT:
        Result.init(this.stastData);
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
    location.hash = ControllerID.RESULT;
  }

  static init() {
    window.onhashchange = () => {
      this.changePresenter(getControllerFromHash(location.hash));
    };
    // для того что бы сразу подгружать с url
    this.changePresenter(getControllerFromHash(location.hash));
  }
}

App.init();
export default App;
