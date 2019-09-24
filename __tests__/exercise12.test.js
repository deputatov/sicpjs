import exercise12 from '../src/exercise12';

test('exercise12', () => {
  expect(exercise12()).toEqual('(5 + 4 + (2 - (3 - (6 + 4 / 5)))) / (3 * (6 - 2) * (2 - 7))');
});
