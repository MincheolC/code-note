function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const counters = Array(N);
  let baseCounter = 0;
  let maxCounter = 0;
  let temp = {};

  A.forEach((x) => {
    const index = x - 1;
    if (x >= 1 && x <= N) {
      temp[index] = temp[index] ? temp[index] + 1 : baseCounter + 1;

      if (temp[index] > maxCounter) {
        maxCounter = temp[index];
      }
    } else {
      baseCounter = maxCounter;
      temp = {};
    }
  });

  counters.fill(baseCounter);
  const keys = Object.keys(temp);
  keys.forEach((key) => {
    counters[key] = temp[key];
  });
  return counters;
}
