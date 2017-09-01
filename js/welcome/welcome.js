import WelocmeView from './welcome--view.js';
import {renderInMain} from '../modules/ScreenManager.js';
import App from '../main.js';

class Welcome {
  constructor() {
  }

  init() {
    this.view = new WelocmeView();

    this.view.startGame = () => {
      App.showGame();
    };

    renderInMain(this.view.element);
  }
}

const welcome = new Welcome();
export default welcome;
