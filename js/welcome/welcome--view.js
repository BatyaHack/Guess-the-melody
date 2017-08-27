import AbstractView from '../view.js';

export default class WelocmeView extends AbstractView {

  get template() {
    return `<section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;2 минуты дать
        максимальное количество правильных ответов.<br>
        Удачи!
      </p>
    </section>`;
  }

  bind() {
    const button = this.element.querySelector(`button`);
    button.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.startGame(); // ниже нам нужно объявить этот класс но не реализовывать!
                        // его мы будем переопределять уже в самом контролере
    });
  }

  startGame() {

  }
}
