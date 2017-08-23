import assert from 'assert'; // стандартная либа из ноды
describe(`Array`, () => {
  describe(`#indexOf`, () => {
    it(`check test value array on 10`, () => {
      assert.equal(-1, [1, 2, 3, 4].indexOf(10));
    });
  });
});
