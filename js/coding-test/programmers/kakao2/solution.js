function solution(N, facility) {
  let minCost = Infinity;
  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= N; j += 1) {
      let maxCost = 0;
      facility.forEach(([row, col, weight]) => {
        const cost = (Math.abs(row - i) + Math.abs(col - j)) * weight;
        maxCost = maxCost < cost ? cost : maxCost;
      });
      minCost = minCost > maxCost ? maxCost : minCost;
    }
  }
  return minCost;
}
