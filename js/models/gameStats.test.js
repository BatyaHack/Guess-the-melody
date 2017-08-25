import assert from 'assert'; // стандартная либа из ноды
import initData from './gameStats.js';
import {setLive, setScore, statistic, getResultGame} from './mainLogic.js';

describe(`testing main logic`, () => {
  describe(`testing lives`, () => {
    it(`Verification of valid data`, () => {
      for (let i = 0; i < 10; i++) {
        assert.equal(i, setLive(initData, i).life);
      }
    });
    it(`Verification of negative data`, () => {
      const setNegativeLives = () => {
        setLive(initData, -1);
      };
      assert.throws(setNegativeLives);
    });
    it(`Checking initial object with 3 lives`, () => {
      assert.equal(3, initData.life);
    });
  });
  describe(`testing score`, () => {
    it(`Set game points to score`, () => {
      assert.equal(100, setScore(initData, (initData.score + 100)).score);
      assert.equal(200, setScore(initData, 200).score);
      assert.equal(350, setScore(initData, 350).score);
    });
    it(`Set not equal score`, () => {
      assert.notEqual(50, setScore(initData, 100).score);
      assert.notEqual(20, setScore(initData, 200).score);
      assert.notEqual(1, setScore(initData, 350).score);
    });
    it(`Checking initial object with 0 score`, () => {
      assert.equal(0, initData.score);
    });
  });
  describe(`testing statistic`, () => {
    it(`check generation of statistics`, () => {
      assert.equal(0.8, getResultGame(statistic, {time: 20, answers: 10}));
      assert.equal(0.0, getResultGame(statistic, {time: 100, answers: 1}));
      assert.equal(0.3, getResultGame(statistic, {time: 30, answers: 8}));
    });
    it(`check duck typization`, () => {
      assert.throws(getResultGame.bind(null, statistic, {lol: 10, kek: 10}));
    });
  });
});
