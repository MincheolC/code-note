function solution(n) {
  // Write your code here
  const row = Math.floor((n - 1) / 702) + 1;
  const left = n - (row - 1) * 702;

  let column = 0;
  if (left >= 1 && left <= 26) {
    column = String.fromCharCode(left + 64);
  } else {
    let columnL = left % 26 === 0 ? Math.floor(left / 26) - 1 : Math.floor(left / 26);
    let columnR = left - (columnL * 26);
    console.log(columnL, columnR);
    column = `${String.fromCharCode(columnL + 64)}${String.fromCharCode(columnR + 64)}`;
  }
  return `${row}${column}`;
}

console.log(solution(702));
console.log(solution(27));