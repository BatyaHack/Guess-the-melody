const main = document.body.querySelector(`.main`);

export function clearMain() {
  main.innerHTML = ``;
}

export function renderInMain(screen) {
  clearMain();
  main.appendChild(screen);
}
