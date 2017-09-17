export default class Model {

  urlRead() {
    throw new Error(`This is abstract class`);
  }

  urlWrite() {
    throw new Error(`This is abstract class`);
  }

  load() {
    return fetch(this.urlRead())
      .then((statistic) => {
        return statistic.json();
      });
  }

  send() {

  }

}
