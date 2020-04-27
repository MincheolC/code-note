/*
 * [0, 0, 1], [0, 1, 1], [0, 2000000000, 1], [20, 20, 20]
 */

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const maximumDivisibleCount = parseInt(B / K, 10);
  const minimumDivisibleCount = A % K ? parseInt(A / K, 10) : parseInt(A / K, 10) - 1;

  return maximumDivisibleCount - minimumDivisibleCount;
}
