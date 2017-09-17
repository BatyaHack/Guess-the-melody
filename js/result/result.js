import ResultView from './result--view.js';
import App from '../main.js';
import {renderInMain} from '../modules/ScreenManager.js';

export default class Result {
  constructor() {
  }

  init(result, winnerProcent) {
    this.view = new ResultView(result, winnerProcent);
    this.view.replayGame = () => {
      App.showWelcome();
    };

    renderInMain(this.view.element);
  }
}
