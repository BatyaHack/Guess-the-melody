import Welcome from './welcome/welcome.js';
import Game from './game/game.js';
import Result from './result/result.js';

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
        Game.chekEndGame(); // постараться правильно переделать init
        // window.initializeCountdown();
        // setTimeout(() => {
        //   window.callBackTimer();
        // }, 3000);
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
    location.hash = ControllerID.GAME;
  }
  static showStats(stats) {
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
