// function fill(arr, x, y, painted, count) {
//   const value = arr[x][y];
//   painted[x][y] = count;

//   console.log('<< Fill >> ', x, y, value, count);

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[0].length; j += 1) {
//       const up = i - 1;
//       const down = i + 1;
//       const left = j - 1;
//       const right = j + 1;

//       if (arr[i][j] !== value) {
//         // if (i === 2 && j === 2) {
//         //   console.log('<< 2, 2 >> ', right < arr[0].length - 1, painted[i][right], arr[i][right], value);
//         //   console.log(
//         //     right < arr[0].length && painted[i][right] === 0 && arr[i][right] === value,
//         //   );
//         // }
//         continue;
//       }
//       if (
//         (up > -1 && painted[up][j] === count) ||
//         (up > -1 && painted[up][j] === 0 && arr[up][j] === value)
//       ) {
//         console.log('UP', i, j, arr[up][j], value);
//         painted[i][j] = count;
//       } else if (
//         (left > -1 && painted[i][left] === count) ||
//         (left > -1 && painted[i][left] === 0 && arr[i][left] === value)
//       ) {
//         console.log('LEFT', i, j, arr[i][left], value);
//         painted[i][j] = count;
//       } else if (
//         (down < arr.length && painted[down][j] === count) ||
//         (down < arr.length && painted[down][j] === 0 && arr[down][j] === value)
//       ) {
//         console.log('DOWN', i, j, arr[down][j], value);
//         painted[i][j] = count;
//       } else if (
//         (right < arr[0].length && painted[i][right] === count) ||
//         (right < arr[0].length && painted[i][right] === 0 && arr[i][right] === value)
//       ) {
//         console.log('RIGHT', i, j, arr[i][right], value);
//         painted[i][j] = count;
//       }
//     }
//   }
// }

function fill(arr, x, y, painted, count) {
  const value = arr[x][y];
  painted[x][y] = count;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[0].length; j += 1) {
      const up = i - 1;
      const down = i + 1;
      const left = j - 1;
      const right = j + 1;

      if (arr[i][j] !== value) {
        continue;
      }

      if (up > -1 && painted[up][j] === 0 && arr[up][j] === value) {
        painted[up][j] = count;
      }

      if (left > -1 && painted[i][left] === 0 && arr[i][left] === value) {
        painted[i][left] = count;
      }

      if (down < arr.length && painted[down][j] === 0 && arr[down][j] === value) {
        painted[down][j] = count;
      }

      if (right < arr.length && painted[i][right] === 0 && arr[i][right] === value) {
        painted[i][right] = count;
      }

      // if (up > -1 && (painted[up][j] === count || (painted[up][j] === 0 && arr[up][j] === value))) {
      //   painted[i][j] = count;
      // } else if (
      //   left > -1 &&
      //   (painted[i][left] === count || (painted[i][left] === 0 && arr[i][left] === value))
      // ) {
      //   painted[i][j] = count;
      // } else if (
      //   down < arr.length &&
      //   (painted[down][j] === count || (painted[down][j] === 0 && arr[down][j] === value))
      // ) {
      //   painted[i][j] = count;
      // } else if (
      //   right < arr.length &&
      //   (painted[i][right] === count || (painted[i][right] === 0 && arr[i][right] === value))
      // ) {
      //   painted[i][j] = count;
      // }
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
        console.log(painted);
      }
    }
  }

  console.log(arr);
  console.log(painted);
  return count;
}

console.log(solution(['aaaba', 'ababa', 'aaaca'])); // 5
console.log(solution(['bbba', 'abba', 'acaa', 'aaac'])); // 4
