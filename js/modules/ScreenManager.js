const app = document.body.querySelector(`.app`);
let currentScreen;


export function renderInMain(screen) {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(screen, currentScreen);
}
