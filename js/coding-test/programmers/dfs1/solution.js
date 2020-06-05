function solution(numbers, target) {
  return dfs(numbers, target, 0, 0);
}

function dfs(numbers, target, index, num) {
  if (index === numbers.length) return num === target ? 1 : 0;
  return dfs(numbers, target, index + 1, num + numbers[index]) + dfs(numbers, target, index + 1, num - numbers[index]);
}
console.log(solution([1, 1, 1, 1, 1], 3));
