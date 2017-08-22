export function getElementFromTemplate(html) {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
}

export function randomValue() {
  return Math.round(Math.random());
}
