function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const flags = Array(A.length + 1).fill(null);
  A.forEach((element) => {
    flags[element - 1] = 1;
  });

  return flags.indexOf(null) + 1;
}
