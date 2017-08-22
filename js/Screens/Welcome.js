import {getElementFromTemplate} from '../utils.js';
import {renderInMain} from '../modules/ScreenManager.js';
import artist from './Artist.js';

export default () => {
  const template = `
 <section class="main main--welcome">
   <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
   <button class="main-play">Начать игру</button>
   <h2 class="title main-title">Правила игры</h2>
   <p class="text main-text">
     Правила просты&nbsp;— за&nbsp;2 минуты дать
     максимальное количество правильных ответов.<br>
     Удачи!
   </p>
 </section>`;

  const screenElem = getElementFromTemplate(template);

  screenElem.querySelector(`.main-play`).addEventListener(`click`, (evt)=>{
    renderInMain(artist());
  });

  return screenElem;
};
