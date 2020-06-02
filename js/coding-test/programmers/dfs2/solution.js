function bfs(arr, queue, visited) {
  if (queue.length === 0) return;
  const i = queue.shift();
  arr[i].forEach((value, index) => {
    if (value && index !== i && !visited[index]) {
      visited[index] = 1;
      queue.push(index);
    }
  });
  bfs(arr, queue, visited);
}

function solution(n, computers) {
  const visited = Array(n).fill(0);
  let count = 0;

  let i = 0;
  while (i > -1) {
    visited[i] = 1;
    bfs(computers, [i], visited);
    count += 1;
    i = visited.findIndex(element => element === 0);
  }
  return count;
}
