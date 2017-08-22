import getElementFromTemplate from '../utils.js';
import {renderInMain} from '../modules/moduleSwitchScreen.js';
import Genre from './moduleGenre.js';
import data from '../models/static.js';
import music from '../models/music.js';

const SHOW_ANSWER = 3;

const svgArtist = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle
    cx="390" cy="390" r="370"
    class="timer-line"
    style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

  <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer-value-mins">02</span><!--
    --><span class="timer-value-dots">:</span><!--
    --><span class="timer-value-secs">00</span>
  </div>
</svg>`;

const titleArtist = `<h2 class="title main-title">${data.artist.title}</h2>`;

const answerBlock = () => {
  let answers = [];
  for (let i = 1; i <= SHOW_ANSWER; i++) {
    answers.push(`<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}" />
        <label class="main-answer" for="answer-${i}">
          <img class="main-answer-preview" src="">
          ${music[i].title}
        </label>
      </div>`);
  }
  return answers;
};

const formArtist = `<form class="main-list">${answerBlock()}</form>`;


const screenElem = getElementFromTemplate(`
  <section class="main main--level main--level-artist">

  ${svgArtist}

  <div class="main-wrap">
    <div class="main-timer"></div>

    ${titleArtist}

    <div class="player-wrapper"></div>

    ${formArtist}

  </div>
</section>
`);

// Array.from переделывает структуры похожии на массивы в реальные массивы
// Возможно тут как то можно поставить обработчик на form
// и через углубления обработчика кликать именно на main-answer
Array.from(screenElem.querySelectorAll(`.main-answer`)).forEach((elem, index, array) => {
  elem.addEventListener(`click`, (event)=>{
    renderInMain(Genre);
  });
});

export default screenElem;
