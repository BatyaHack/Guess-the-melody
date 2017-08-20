import getElementFromTemplate from '../utils.js';
import data from '../models/static.js';
import {renderInMain} from '../modules/moduleSwitchScreen.js';
import artist from './moduleArtist.js';

const screenElem = getElementFromTemplate(`
  <section class="main main--welcome">
    <section class="logo" title="${data.welcome.title}"><h1>${data.welcome.title}</h1></section>
    <button class="main-play">${data.buttons.startButtons}</button>
    <h2 class="title main-title">${data.welcome.ruls.title}</h2>
    <p class="text main-text">
      ${data.welcome.ruls.description}
    </p>
  </section>`);


screenElem.querySelector(`.main-play`).addEventListener(`click`, (evt)=>{
  renderInMain(artist);
});

export default screenElem;
