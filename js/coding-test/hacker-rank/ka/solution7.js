// 수식을 만족 (0 <= i <= j-1)
// 높이는 갈수록 커짐. i부터 작아짐.
// 가장 많은 책이 담긴 사진
// function solution(arr) {
//   let max = -1;

//   if (arr.length <= 2) {
//     return arr.length;
//   }

//   let length = 1;
//   const check = [];
//   let acc = 0;

//   for (let i = 1; i < arr.length - 1; i += 1) {
//     const pre = arr[i - 1];
//     const current = arr[i];
//     const next = arr[i + 1];

//     // V
//     if (pre > current && next > current) {
//       max = max > length ? max : length + 1;
//       check.push(length + 1);
//       length = 1;
//     // \___
//     } else if ((pre > current && next === current) || (pre === current && next === current)) {
//       acc += 1;
//       length += 1;
//     // ___/
//     } else if (pre === current && next > current) {
//       max = max > length ? max : length + 1;
//       length = acc + 1;
//       acc = 0;
//     } else {
//       length += 1;
//     }
//   }
//   check.push(length + 1);
//   console.log(check);
//   return max > length ? max : length + 1;
// }

function solution(arr) {
  let max = -1;

  if (arr.length <= 2) {
    return arr.length;
  }

  const check = [];
  let length = 1;
  let acc = 0;
  let wasDown = false;

  for (let i = 1; i < arr.length - 1; i += 1) {
    const pre = arr[i - 1];
    const current = arr[i];
    const next = arr[i + 1];

    // V
    if (pre > current && next > current) {
      max = max > length ? max : length + 1;
      check.push(length + 1);
      length = 1;
      wasDown = false;
      // \_
    } else if (pre > current && next === current) {
      wasDown = true;
      acc += 1;
      length += 1;
      // ___
    } else if (pre === current && next === current) {
      acc += 1;
      length += 1;
      // _/
    } else if (pre === current && next > current && wasDown) {
      max = max > length ? max : length + 1;
      check.push(length + 1);
      length = acc + 1;
      acc = 0;
      wasDown = false;
    } else {
      length += 1;
    }
  }
  check.push(length + 1);
  console.log(check);
  return max > length ? max : length + 1;
}

// console.log(solution([10, 8, 9, 15, 12, 6, 7]))
// console.log(solution([1]))
// console.log(solution([1,2]))
// console.log(solution([2,2,2]))
// console.log(solution([1,2,3,5,6]))
// console.log(solution([6,4,3,2,1]))
// console.log(solution([5, 1, 2, 1, 4, 5]));
// console.log(solution([9, 7, 6, 2, 1]));
// console.log(solution([7, 3, 4, 4, 8, 2, 5, 1]));
// console.log(solution([10, 9, 8, 9, 10, 11]));
// console.log(solution([10, 9, 8, 8, 8, 9, 10, 11]));
// console.log(solution([10, 9, 8, 8, 8, 9]));
// console.log(solution([1,1,2,2,3,3,2,1,1,1,2,3,3,4,5,6,7,8]));
// console.log(
//   solution([1, 2, 3, 3, 4, 4, 5, 5, 6, 5, 4, 3, 2, 1]),
//   [1, 2, 3, 3, 4, 4, 5, 5, 6, 5, 4, 3, 2, 1].length,
// );
