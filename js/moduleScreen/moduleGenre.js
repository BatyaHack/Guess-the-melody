import getElementFromTemplate from '../utils.js';
import {renderInMain} from '../modules/moduleSwitchScreen.js';
import result from './moduleResult.js';
import data from '../models/static.js';

const SHOW_NOTES = 4;

const titleGenre = `<h2 class="title">${data.genre.title}</h2>`;

const options = () => {
  const optionVar = [];
  for (let i = 1; i <= SHOW_NOTES; i++) {
    optionVar.push(`<div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-${i}" id="a-${i}">
      <label class="genre-answer-check" for="a-${i}"></label>
    </div>`);
  }
  return optionVar;
};

const nextButton = `<button class="genre-answer-send" type="submit">${data.buttons.answerButton}</button>`;

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

const getRandowAnswer = () => Math.round(Math.random());
const button = screenElem.querySelector(`.genre-answer-send`);
const answers = Array.from(screenElem.querySelectorAll(`input[name='answer']`));

button.disabled = true;

answers.forEach((elem, index, array)=>{
  elem.addEventListener(`change`, (evt)=>{
    // Если нужный элемент есть то disabled кнопки = false
    button.disabled = !answers.find((answer) => answer.checked === true);
  });
});

button.addEventListener(`click`, (evt) => {

  // Очистка пользовательского выбора
  answers.forEach((elem, index, array)=>{
    elem.checked = false;
  });

  renderInMain(result(getRandowAnswer()));
});


export default screenElem;
