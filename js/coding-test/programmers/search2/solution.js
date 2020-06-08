const memo = {};
function dfs(sources, n) {
  if (sources.length === 0) return;

  for (let i = 0; i < sources.length; i += 1) {
    const copy = Array.from(sources);
    const number = parseInt(n + copy.splice(i, 1), 10);

    if (!memo[number]) {
      memo[number] = 1;
      dfs(copy, number);
    }
  }
}

function buildPrimeArr(length) {
  const arr = Array(length + 1).fill(1);
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i * i < length + 1; i += 1) {
    let j = 2;
    while (i * j < length + 1) {
      arr[i * j] = 0;
      j += 1;
    }
  }
  return arr.reduce((arr, value, index) => {
    if (value) arr.push(index);
    return arr;
  }, []);
}

function solution(numbers) {
  const splitedNumbers = Array.from(numbers).sort((a, b) => b - a);
  const maxNumber = parseInt(splitedNumbers.join(''), 10);
  const primes = buildPrimeArr(maxNumber);
  dfs(splitedNumbers, '');

  let primeCount = 0;
  Object.keys(memo).forEach((n) => {
    primeCount = primes.includes(parseInt(n, 10)) ? primeCount + 1 : primeCount;
  });
  return primeCount;
}
