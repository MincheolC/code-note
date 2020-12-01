function stockmax(prices) {
  if (prices.length === 0) {
    return 0;
  }
  const max = Math.max(...prices);
  const maxIndex = prices.indexOf(max);
  let profit = 0;

  for (let i = 0; i < maxIndex; i += 1) {
    profit += (max - prices[i]);
  }

  return profit + stockmax(prices.slice(maxIndex + 1));
}

console.log(stockmax([1, 2, 100]));
console.log(stockmax([100, 2, 1]));
