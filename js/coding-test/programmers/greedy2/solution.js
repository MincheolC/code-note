// function solution(number, k) {
//   const numbers = Array.from(number).map(n => parseInt(n, 10));
//   const flags = Array(numbers.length).fill(0);
//   let answer = '';

//   let left = k;
//   let from = 0;

//   if (numbers.filter(n => n !== 9).length === 0) return number.substring(0, number.length - k);

//   while (left > 0) {
//     const arr = numbers.slice(from, from + left + 1);
//     const maxIndex = arr.indexOf(Math.max(...arr));

//     for (let i = from; i < from + maxIndex; i += 1) {
//       flags[i] = 1;
//     }
//     left -= maxIndex;
//     from += maxIndex + 1;
//     console.log(arr, maxIndex, left, from, flags);
//   }

//   console.log(flags)

//   flags.forEach((n, index) => {
//     if (!n) answer += numbers[index];
//   });
//   return answer;
// }

function solution(number, k) {
  const numbers = Array.from(number).map(n => parseInt(n, 10));
  const answer = [];
  let left = k;

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];

    while (left > 0 && answer[answer.length - 1] < num) {
      answer.pop();
      left -= 1;
    }
    answer.push(num);
  }

  answer.splice(answer.length - left, left);
  return answer.join('');
}

// console.log(solution('1924', 2));
// console.log(solution('4177252841', 4));
// console.log(solution('777977', 2));
// console.log(solution('7771777', 1));
// console.log(solution('777', 1));
// console.log(solution('100010', 2));
console.log(solution('777799', 2));