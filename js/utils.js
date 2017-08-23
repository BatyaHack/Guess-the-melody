export function getElementFromTemplate(html) {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
}


export function randomValue(min = 0, max = 1) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}


export function musicMix(a, b) {
  return Math.random() - 0.5;
}
