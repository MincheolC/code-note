function isWithInRange(n) {
  return n >= 1 && n <= 1000000000;
}

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  const x = X;
  const y = Y;
  const d = D;

  if (!isWithInRange(x) || !isWithInRange(y) || !isWithInRange(d) || x > y) {
    throw new Error('invalid input');
  }

  return Math.ceil((y - x) / d);
}
