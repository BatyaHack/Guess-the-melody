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

export function getRandomMusic(obj, countAnswer) {
  let randomMusic = obj.slice(0);
  randomMusic.sort(getRandom);
  return randomMusic.slice(0, countAnswer);
}

function getRandom(a, b) {
  return Math.random() - 0.5;
}
