import ResultView from './result--view.js';
import Welcome from '../welcome/welcome.js';
import {renderInMain} from '../modules/ScreenManager.js';

export default class Result {
  constructor(result = 0) { // по умолчанию loss
    this.view = new ResultView(result);
  }

  init() {
    this.view.replayGame = () => {
      const welcome = new Welcome();
      welcome.init();
    };

    renderInMain(this.view.element);
  }
}
