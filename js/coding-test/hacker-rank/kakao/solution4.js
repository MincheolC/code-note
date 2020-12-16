function fill(arr, x, y, painted, count) {
  const value = arr[x][y];
  const queue = [];

  queue.push({ x, y });

  while (queue.length > 0) {
    const node = queue.shift();
    let left = node.y - 1;
    let right = node.y + 1;

    while (left > -1 && arr[node.x][left] === value) {
      left -= 1;
    }

    while (right < arr[0].length && arr[node.x][right] === value) {
      right += 1;
    }

    for (let j = left + 1; j < right; j += 1) {
      painted[node.x][j] = count;
      const up = node.x - 1;
      const down = node.x + 1;

      if (up > -1 && arr[up][j] === value && painted[up][j] === 0) {
        queue.push({
          x: up,
          y: j,
        });
      }
      if (down < arr.length && arr[down][j] === value && painted[down][j] === 0) {
        queue.push({
          x: down,
          y: j,
        });
      }
    }
  }
}


function solution(arr) {
  // Write your code here
  const painted = [];
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    painted.push(Array(arr[0].length).fill(0));
  }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[0].length; j += 1) {
      if (painted[i][j] === 0) {
        count += 1;
        fill(arr, i, j, painted, count);
      }
    }
  }

  return count;
}

console.log(solution(['aaaba', 'ababa', 'aaaca'])); // 5
console.log(solution(['bbba', 'abba', 'acaa', 'aaac'])); // 4
