import {getElementFromTemplate} from '../utils.js';
import {randomValue, getRandomMusic} from '../utils.js';
import {renderInMain} from '../modules/ScreenManager.js';
import result from './Result.js';
import data from '../models/static.js';
import music from '../models/music.js';

export default () => {
  const SHOW_NOTES = 4;

  let randomMusic = getRandomMusic(music, SHOW_NOTES);

  const titleGenre = `<h2 class="title">${data.genre.title}</h2>`;

  let nextButton = `<button class="genre-answer-send" type="submit">${data.buttons.answerButton}</button>`;

  const options = () => {
    const optionVar = [];
    for (let i = 0; i < SHOW_NOTES; i++) {
      optionVar.push(`<div class="genre-answer">

        <div class="player-wrapper">
        </div>

        <input type="checkbox" name="answer" value="answer-${i}" id="a-${i}">
        <label class="genre-answer-check" for="a-${i}"></label>
      </div>`);
    }
    return optionVar.join(``);
  };


  const formGenre = `<form class="genre">

    ${options()}

    ${nextButton}

    </form>`;

  const screenElem = getElementFromTemplate(`<section class="main main--level main--level-genre">
    ${titleGenre}

    <form class="genre">

    ${formGenre}

    </form>
  </section>`);

  nextButton = screenElem.querySelector(`.genre-answer-send`);
  nextButton.disabled = true;

  const answers = Array.from(screenElem.querySelectorAll(`input[name='answer']`));
  answers.forEach((elem, index, array)=>{
    elem.addEventListener(`change`, (evt)=>{
      // Если чекнут хоть один chekbox отключаем disabled кнопки
      nextButton.disabled = !answers.find((answer) => answer.checked === true);
    });
  });

  nextButton.addEventListener(`click`, (evt) => {
    renderInMain(result(randomValue()));
  });

  const allPlayers = screenElem.querySelectorAll(`.player-wrapper`);
  allPlayers.forEach((elem, index, array)=>{
    window.initializePlayer(screenElem, elem, randomMusic[index].resSrc);
  });

  return screenElem;
};
