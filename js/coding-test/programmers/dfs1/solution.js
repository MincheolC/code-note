// solution 1
function dfs(numbers, target, sum) {
  if (!numbers || numbers.length < 1) return sum === target ? 1 : 0;
  const next = numbers.slice(1);
  return dfs(next, target, sum + numbers[0]) + dfs(next, target, sum - numbers[0]);
}

function solution(numbers, target) {
  return dfs(numbers, target, 0);
}

// solution 2
function dfs2(numbers, target, index, num) {
  if (index === numbers.length) return num === target ? 1 : 0;
  return (
    dfs2(numbers, target, index + 1, num + numbers[index]) +
    dfs2(numbers, target, index + 1, num - numbers[index])
  );
}

function solution2(numbers, target) {
  return dfs2(numbers, target, 0, 0);
}

console.log(solution([1, 1, 1, 1, 1], 3));
