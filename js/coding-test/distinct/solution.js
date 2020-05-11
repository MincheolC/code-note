function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sets = new Set();

  if (A.length === 0) {
    return 0;
  }
  for (let i = 0; i < A.length; i += 1) {
    sets.add(A[i]);
  }
  return sets.size;
}
