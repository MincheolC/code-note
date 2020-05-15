function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const negatives = [];
  const positives = [];

  A.forEach((element) => {
    if (element <= 0) {
      negatives.push(element);
    } else {
      positives.push(element);
    }
  });

  positives.sort((a, b) => b - a);

  const len = positives.length;

  for (let i = 0; i < len - 2; i += 1) {
    const diff = positives[i] - positives[i + 1];
    if (diff >= positives[i + 1]) {
      continue;
    }

    if (positives[i + 2] > diff) {
      return 1;
    }
  }

  return 0;
}
