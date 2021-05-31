function tco(fn) {
  let active;
  let nextArgs;
  return function (...args) {
    let result;
    nextArgs = args;
    if (!active) {
      active = true;
      while (nextArgs) {
        result = fn.apply(this, [nextArgs, (nextArgs = null)][0]);
      }
      active = false;
    }
    return result;
  };
}


function fill(arr, i, j, painted, isFilled) {
  console.log(i, j, isFilled)
  if (painted[i][j] !== 0) {
    return isFilled;
  }
  const current = arr[i][j];
  painted[i][j] = 1;
  isFilled = true;

  if (i > 0 && current === arr[i - 1][j]) {
    console.log('위')
    fill(arr, i - 1, j, painted, isFilled); // 위
  }

  if (j > 0 && current === arr[i][j - 1]) {
    console.log('좌');
    fill(arr, i, j - 1, painted, isFilled); // 좌
  }

  if (i < arr.length - 1 && current === arr[i + 1][j]) {
    console.log('아래');
    fill(arr, i + 1, j, painted, isFilled); // 아래
  }

  if (j < arr[0].length - 1 && current === arr[i][j + 1]) {
    console.log('우');
    fill(arr, i, j + 1, painted, isFilled); // 우
  }

  return isFilled;
}

const tcoFill = tco(fill);

function solution(arr) {
  // Write your code here
  const painted = [];
  let isFilled = false;
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    painted.push(Array(arr[0].length).fill(0));
  }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[0].length; j += 1) {
      if (tcoFill(arr, i, j, painted, isFilled)) {
        count += 1;
      }
      isFilled = false;
    }
  }

  console.log(arr);
  console.log(painted);
  return count;
}

console.log(solution(['aaaba', 'ababa', 'aaaca']));