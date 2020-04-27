function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = {};

  if (A.length === 1 && A[0] !== 1) {
    return 0;
  }

  for (let i = 0; i < A.length; i += 1) {
    const element = A[i];
    const value = map[element] || 0;

    if (!value) {
      map[element] = value + 1;
    } else {
      return 0;
    }
  }

  const keys = Object.keys(map).map(Number);
  const sortedKeys = keys.sort((a, b) => a - b);

  if (sortedKeys[0] !== 1) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < sortedKeys.length; i += 1) {
    count += 1;
    if (count < sortedKeys[i]) {
      return 0;
    }
  }

  return 1;
}
