function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

try {
  factorial(10000);
} catch (e) {
  console.error(e); // Stack over flow
}

function tailFactorial(n, acc = 1) {
  if (n === 0) return acc;
  return tailFactorial(n - 1, n * acc);
}

tailFactorial(10000); // Not Support since node v8
