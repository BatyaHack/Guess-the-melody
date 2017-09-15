import TimerView from './timer--view';
import App from '../main.js';

class Timer {
  constructor() {
  }

  init() {
    this.allTime = 10; // два рза по 60 секнд (120 по умолчанию)
    this.stepTimer = 0;
    this.view = new TimerView(this.allTime);
    document.querySelector(`.app`).appendChild(this.view.element);
    this.interval = setInterval(() => {
      this.view.redrawTimer(this.allTime, this.stepTimer++);
      if (this.stepTimer === this.allTime) { // если время вышло
        App.showStats({
          score: 0,
          life: 0,
          level: 0,
          time: 0
        });
      }
    }, 1000);
  }

  getGameTime() {
    return this.stepTimer; // время возвращается в секундах
  }

  destroy() {
    clearInterval(this.interval);
    document.querySelector(`.app`).removeChild(document.querySelector(`.timer`));
    document.querySelector(`.app`).removeChild(document.querySelector(`.timer-value`));
  }
}

const timer = new Timer();
export default timer;
