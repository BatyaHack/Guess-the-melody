export const setLive = (obj, value) => {

  checkValue(value);

  const newGame = Object.assign({}, obj);
  newGame.life = value;
  return newGame;
};

export const setScore = (obj, value) => {

  checkValue(value);

  const newGame = Object.assign({}, obj);
  newGame.score = value;
  return newGame;
};

export const setLevel = (obj, value) => {

  checkValue(value);

  const newGame = Object.assign({}, obj);
  newGame.level = value;
  return newGame;
};

function checkValue(value) {
  if (value < 0) {
    throw new RangeError(`not valid value`);
  }
}

export const statistic = [
  {time: 20, answers: 10},
  {time: 32, answers: 10},
  {time: 44, answers: 10},
  {time: 20, answers: 8},
  {time: 50, answers: 7},
];

export const getResultGame = (generalStatistics, ojbResultGame) =>{

  // утиная типизация
  /*eslint-disable */
  if (ojbResultGame.time === undefined || ojbResultGame.answers === undefined) {
  /*eslint-enable */
    throw new TypeError(`Game object not have time or answers`);
  }

  const stats = generalStatistics.slice(0);

  stats.push(ojbResultGame);

  // Сортируем что бы получить рейтинг
  stats.sort((a, b) => {
    return (a.answers / a.time) < (b.answers / b.time);
  });

  // Находим последниюю игру уже в рейтинге
  let lastGame = null;
  stats.find((elem, index, arr) => {
    if (elem.time === ojbResultGame.time && elem.answers === ojbResultGame.answers) {
      lastGame = index;
      return true;
    }
    return false;
  });

  // Вернем рейтинг
  const playersBelow = stats.length - (lastGame + 1);

  return (playersBelow / stats.length).toFixed(1);
};
