// Переключение по alt + стрелки

// const main = document.body.querySelector(`.main`);
// const template = document.getElementById(`templates`);
// const screens = template.content.querySelectorAll(`.main`);
// let currentScreen = screens.length - 1; /* Стартовая страница */
//
// const valueCheck = function (value) {
//   if (value < 0) {
//     return 0;
//   }
//   if (value >= screens.length) {
//     return screens.length - 1;
//   }
//   return value;
// };
//
// function setCurrentScreen(necessaryScreen) {
//   currentScreen = necessaryScreen;
//   main.innerHTML = ``;
//   main.append(screens[necessaryScreen]);
// }
//
// setCurrentScreen(currentScreen);
//
// document.addEventListener(`keydown`, function (event) {
//   if (event.altKey) {
//     switch (event.code) {
//       case `ArrowRight`:
//         setCurrentScreen(valueCheck(++currentScreen));
//         break;
//       case `ArrowLeft`:
//         setCurrentScreen(valueCheck(--currentScreen));
//         break;
//     }
//   }
// });
