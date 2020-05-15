function getIntersectNum(leftPoints, rightPoint) {
  let count = 0;
  for (let i = 0; i < leftPoints.length; i += 1) {
    if (leftPoints[i] > rightPoint) {
      return count;
    }
    count += 1;
  }
  return count;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const leftPoints = [];
  const rightPoints = [];
  const len = A.length;

  for (let i = 0; i < len; i += 1) {
    leftPoints.push(i - A[i]);
    rightPoints.push(i + A[i]);
  }

  leftPoints.sort();
  rightPoints.sort();

  let intersections = 0;

  for (let i = 0; i < len; i += 1) {
    const num = getIntersectNum(leftPoints, rightPoints[i]);
    intersections += num - 1 - i;
  }
  if (intersections > 10000000) {
    return -1;
  }
  return intersections;
}
