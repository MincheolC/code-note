function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;

  if (len < 0 || len > 100 || K < 0 || K > 100) {
    throw new Error('out of range');
  }
  A.forEach((element) => {
    if (element < -1000 || element > 1000) {
      throw new Error('out of range');
    }
  });

  if (len === K) {
    return A;
  }

  const resultArr = [];
  const k = K % len;

  for (let i = 0; i < len; i += 1) {
    const index = (i + (len - k)) % len;
    resultArr.push(A[index]);
  }
  return resultArr;
}
