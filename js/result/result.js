import ResultView from './result--view.js';
import App from '../main.js';
import {renderInMain} from '../modules/ScreenManager.js';
// вот тут подтягивать общую статистику и отдавать во view процент еще одной переменной
// и не забыть сделать точность до двух цифр после 0
class Result {
  constructor() {
  }

  init(result) {
    this.view = new ResultView(result);
    this.view.replayGame = () => {
      App.showWelcome();
    };

    renderInMain(this.view.element);
  }
}

const result = new Result();
export default result;
