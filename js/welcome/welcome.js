import WelocmeView from './welcome--view.js';
import Artist from '../artist/artist.js';
import {renderInMain} from '../modules/ScreenManager.js';

export default class Welcome {
  constructor() {
    this.view = new WelocmeView();
  }

  init() {
    this.view.startGame = () => {
      const artist = new Artist();
      artist.init();
    };

    renderInMain(this.view.element);
  }
}
