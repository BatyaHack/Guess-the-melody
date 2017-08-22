import {getElementFromTemplate} from '../utils.js';
import {renderInMain} from '../modules/ScreenManager.js';
import main from './Welcome.js';
import data from '../models/static.js';

export default (state) => {

  const win = `<h2 class="title">${data.result.win.title}</h2>
  <div class="main-stat">${data.result.win.stats}</div>
  <span class="main-comparison">${data.result.win.description}</span>`;

  const loss = `<h2 class="title">${data.result.loss.title}</h2>
  <div class="main-stat">${data.result.loss.description}</div>`;

  const content = state ? win : loss;

  const screenElem = getElementFromTemplate(`
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>${data.logo}</h1></section>

      ${content}

      <span role="button" tabindex="0" class="main-replay">${data.buttons.repeatButton}</span>
    </section>
  `);

  screenElem.querySelector(`.main-replay`).addEventListener(`click`, (evt)=>{
    renderInMain(main());
  });

  return screenElem;
};
