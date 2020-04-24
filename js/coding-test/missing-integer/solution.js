function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const positivesMap = {};

  A.forEach((element) => {
    if (element > 0) {
      positivesMap[element] = element;
    }
  });

  const positives = Object.values(positivesMap);

  if (positives.length === 0) {
    return 1;
  }

  positives.sort((a, b) => (a - b));
  let smallest = 0;
  for (let i = 0; i < positives.length; i += 1) {
    smallest += 1;
    if (positives[i] !== smallest) {
      return smallest;
    }
  }
  smallest += 1;
  return smallest;
}
