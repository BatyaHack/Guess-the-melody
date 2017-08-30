import music from './models/music.js';

export function getElementFromTemplate(html) {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
}

export function randomValue(min = 0, max = 1) {
  let rand = min + Math.random() * (max - min);
  rand = Math.floor(rand);
  return rand;
}

export function getRandomMusic(countAnswer) {
  const size = checkValue(countAnswer);
  const randomMusic = music.slice(0);
  randomMusic.sort(getRandom);
  return {
    randomMusic: randomMusic.slice(0, size),
    rightAnswer: randomMusic[randomValue(0, size)],
  };
}

function getRandom(a, b) {
  return Math.random() - 0.5;
}

function checkValue(value) {
  if (value > music.length) {
    value = music.length;
  }
  return value;
}
