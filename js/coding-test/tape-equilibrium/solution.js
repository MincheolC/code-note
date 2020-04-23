function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = Array(A.length).fill(null);
  const sumOfA = A.reduce((sum, value) => sum + value);

  arr[0] = {
    preP: 0,
    postP: sumOfA,
  };
  let minDiff = 100000000;

  for (let i = 1; i < A.length; i += 1) {
    const preP = arr[i - 1].preP + A[i - 1];
    const postP = arr[i - 1].postP - A[i - 1];
    arr[i] = {
      preP,
      postP,
    };
    const diff = Math.abs(postP - preP);
    if (minDiff > diff) {
      minDiff = diff;
    }
  }
  return minDiff;
}
