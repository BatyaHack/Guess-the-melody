import TimerView from './timer--view';

class Timer {
  constructor() {
  }

  init() {
    let allTime = 120;
    let stepTimer = 0;
    this.view = new TimerView(this.allTime);
    document.querySelector(`.app`).appendChild(this.view.element);
    this.interval = setInterval(() => {
      this.view.redrawTimer(allTime, stepTimer++);
    }, 1000);
  }

  destroy() {
    clearInterval(this.interval);
    document.querySelector(`.app`).removeChild(document.querySelector(`.timer`));
    document.querySelector(`.app`).removeChild(document.querySelector(`.timer-value`));
  }
}

const timer = new Timer();
export default timer;
