import View from '../view.js';
import {convertTime} from '../utils.js';

export default class TimerView extends View {
  constructor(time) {
    super();
    this.time = convertTime(time);
    this.timerMin = this.element.querySelector(`.timer-value-mins`);
    this.timerSec = this.element.querySelector(`.timer-value-secs`);
    this.circle = this.element.querySelector(`.timer-line`);
  }

  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
     <circle
       cx="390" cy="390" r="370"
       class="timer-line"
       style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

     <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
       <span class="timer-value-mins">${this.time.min}</span><!--
       --><span class="timer-value-dots">:</span><!--
       --><span class="timer-value-secs">${this.tiem.sec}</span>
     </div>
    </svg>`;
  }

  redrawTimer(time, timePas) {
    this.time = convertTime(this.time - timePas);
    this.timerMin.textContent = this.time.min;
    this.timerMin.timerSec = this.time.sec;

    const radius = parseInt(this.circle.getAttributeNS(null, `r`), 10);
    const length = 2 * Math.PI * radius;
    const stepLength = length / time;
    const lengthToClear = stepLength * timePas;

    this.circle.setAttributeNS(null, `r`, radius);
    this.circle.setAttributeNS(null, `stroke-dasharray`, length.toString());
    this.circle.setAttributeNS(null, `stroke-dashoffset`, lengthToClear.toString());
  }
}
