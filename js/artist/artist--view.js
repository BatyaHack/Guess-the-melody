import AbstractView from '../view.js';
import data from '../models/static.js';
import svg from '../models/svg.js';

export default class ArtistView extends AbstractView {
  get template() {

    const titleArtist = `<h2 class="title main-title">${data.artist.title}</h2>`;

    const formArtist = `<form class="main-list">${this.answerBlock.join(``)}</form>`;

    return `<section class="main main--level main--level-artist">
      ${svg}
    <div class="main-wrap">
      <div class="main-timer"></div>
      ${titleArtist}
      <div class="player-wrapper"></div>
      ${formArtist}
    </div>
  </section>`;
  }

  bind() {
    [...this.element.querySelectorAll(`.main-answer`)].forEach((elem, index, arr)=>{
      elem.addEventListener(`click`, (evt)=>{
        this.nextLevel();
      });
    });
  }


  nextLevel() {

  }
}
