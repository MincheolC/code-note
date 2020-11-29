function isUpper(c) {
  return c >= 'A' && c <= 'Z';
}

function abbreviation(a, b) {
  const dp = [];
  const column = a.length;
  const row = b.length;
  // initialize
  for (let i = 0; i < row + 1; i += 1) {
    dp.push(Array(column + 1).fill(0));
  }
  dp[0][0] = 1;

  for (let i = 0; i < column; i += 1) {
    for (let j = 0; j < row + 1; j += 1) {
      if (!dp[j][i]) continue;
      if (!isUpper(a[i])) {
        dp[j][i + 1] = 1;
      }
      if (a[i].toUpperCase() === b[j]) {
        dp[j + 1][i + 1] = 1;
      }
    }
  }

  return dp[row][column] ? 'YES' : 'NO';
}
const ex01 = ['daBcd', 'ABC', 'ABcC', 'ABC', 'Pi', 'P'];

for (let i = 0; i < ex01.length / 2; i += 1) {
  console.log(abbreviation(ex01[2 * i], ex01[2 * i + 1]));
}
