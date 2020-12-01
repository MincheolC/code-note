function makeChange(coins, money, index, memo) {
  let amountWithCoin = 0;
  let ways = 0;

  if (money === 0) {
    return 1;
  }
  if (index >= coins.length) {
    return 0;
  }

  const key = `${money}-${index}`;
  if (memo.has(key)) {
    return memo.get(key);
  }

  while (amountWithCoin <= money) {
    const remaining = money - amountWithCoin;
    ways += makeChange(coins, remaining, index + 1, memo);
    amountWithCoin += coins[index];
  }

  memo.set(key, ways);
  return ways;
}


function getWays(n, c) {
  return makeChange(c, n, 0, new Map());
}

// console.log(getWays(3, [1, 2, 3, 8]));
console.log(getWays(4, [1, 2, 3]));
