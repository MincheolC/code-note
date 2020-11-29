/*
 * Fibonacci Modified t3 = t2 + t1^2
 * 64-bits Integer (BigInt)
 */
function fibonacciModified(t1, t2, n) {
  const cache = [t1, t2];
  for (let i = 2; i < n; i += 1) {
    const i2 = BigInt(cache[i - 2]);
    const i1 = BigInt(cache[i - 1]);
    const value = BigInt(i2 + i1 * i1);
    cache.push(value);
  }
  return cache.pop();
}

console.log(fibonacciModified(0, 1, 10));
