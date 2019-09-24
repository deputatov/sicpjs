import exercise13 from '../src/exercise13';

test('exercise13', () => {
  // expect(exercise13(0)).toEqual(0);
  expect(exercise13(1, 2, 4)).toEqual(20);
  expect(exercise13(9, 3, 7)).toEqual(130);
  expect(exercise13(2, 1, 4)).toEqual(20);
});
