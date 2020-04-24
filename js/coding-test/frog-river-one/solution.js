function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const obj = {};
  let count = 0;

  for (let i = 0; i < A.length; i += 1) {
    if (!obj[A[i]]) {
      count += 1;
    }
    if (count === X) {
      return i;
    }
    obj[A[i]] = 1;
  }
  return -1;
}
