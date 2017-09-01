import ResultView from './result--view.js';
import App from '../main.js';
import {renderInMain} from '../modules/ScreenManager.js';

class Result {
  constructor() {
  }

  init(result) {
    this.view = new ResultView(result);
    console.log(result);
    this.view.replayGame = () => {
      App.showWelcome();
    };

    renderInMain(this.view.element);
  }
}

const result = new Result();
export default result;
