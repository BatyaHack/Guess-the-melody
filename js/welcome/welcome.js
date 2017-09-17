import WelocmeView from './welcome--view.js';
import {renderInMain} from '../modules/ScreenManager.js';
import App from '../main.js';

export default class Welcome {
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
