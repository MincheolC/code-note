function solution(N) {
  let horizontal = 1;
  let vertical = 1;

  for (let i = 3; i <= N; i += 1) {
    if (i % 2 === 1) horizontal += vertical;
    if (i % 2 === 0) vertical += horizontal;
  }

  if (N % 2 === 1) vertical += horizontal;
  if (N % 2 === 0) horizontal += vertical;
  return 2 * horizontal + 2 * vertical;
}

console.log(solution(5))
console.log(solution(6))