import WelocmeView from './welcome--view.js';
import {renderInMain} from '../modules/ScreenManager.js';
import Game from '../game/game.js';

export default class Welcome {
  constructor() {
    this.view = new WelocmeView();
  }

  init() {
    this.view.startGame = () => {
      Game.chekEndGame();
    };

    renderInMain(this.view.element);
  }
}
