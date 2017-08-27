import WelocmeView from './welcome--view.js';
import {renderInMain} from '../modules/ScreenManager.js';

export default class Welcome {
  constructor() {
    this.view = new WelocmeView();
  }

  init() {
    renderInMain(this.view.element);

    this.view.startGame = () => {
      console.log(1);
    };
  }
}
