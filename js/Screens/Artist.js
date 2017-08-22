import {getElementFromTemplate} from '../utils.js';
import {renderInMain} from '../modules/ScreenManager.js';
import genre from './Genre.js';
import data from '../models/static.js';
import music from '../models/music.js';
import svg from '../models/svg.js';


export default () => {
  const SHOW_ANSWER = 3;

  const svgArtist = svg;

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

  const formArtist = `<form class="main-list">${answerBlock().join(``)}</form>`;

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


  Array.from(screenElem.querySelectorAll(`.main-answer`)).forEach((elem, index, array) => {
    elem.addEventListener(`click`, (event)=>{
      renderInMain(genre());
    });
  });

  return screenElem;

};
