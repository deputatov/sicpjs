const sumOfSquaresOfTopTwo = (a, b, c) => {
  const square = (x) => x * x;
  const sumOfSquares = (x, y) => square(x) + square(y);
  if (a > c && b > c) return sumOfSquares(a, b);
  if (b > a && c > a) return sumOfSquares(b, c);
  return sumOfSquares(a, c);
};

export default sumOfSquaresOfTopTwo;
