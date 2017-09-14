import TimerView from './timer--view';

class Timer {
  constructor() {
  }

  init() {
    this.view = new TimerView(120);
    document.querySelector(`.app`).appendChild(this.view.element);
  }

  destroy() {
    document.querySelector(`.app`).removeChild(document.querySelector(`.timer`));
  }
}

const timer = new Timer();
export default timer;
