import Welcome from './welcome/welcome.js';
import Game from './game/game.js';
import Result from './result/result.js';


export default class App {

  static showWelcome() {
    Welcome.init();
  }

  static showGame() {
    Game.chekEndGame();
  }

  static showStats(stats) {
    Result.init(stats);
  }
}
