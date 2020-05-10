const WEST = 1;

// [0, 1, 0, 1, 0, 1] Wrong answer

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;

  let numOfPair = 0;
  let sumOfPair = 0;

  for (let i = len - 1; i >= 0; i -= 1) {
    if (A[i] === WEST) {
      numOfPair += 1;
    } else {
      sumOfPair = 2 * sumOfPair + numOfPair;
      numOfPair = 0;
    }
  }

  return sumOfPair;
}

const EAST = 0;

function solution2(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;

  let numOfEastCar = 0;
  let numOfWestCar = 0;
  const numOfWestCarList = [];
  let exCarWay = 0;

  for (let i = len - 1; i >= 0; i -= 1) {
    if (A[i] === WEST) {
      numOfWestCar += 1;
    } else if (A[i] === EAST && exCarWay === EAST) {
      numOfEastCar += 1;
      numOfWestCarList.push(numOfWestCar);
    } else {
      numOfEastCar += 1;
      numOfWestCarList.push(numOfWestCar);
      numOfWestCar = 0;
    }
    exCarWay = A[i];
  }

  let sumOfPair = 0;
  for (let i = 0; i < numOfEastCar; i += 1) {
    sumOfPair += (numOfEastCar - i) * numOfWestCarList[i];
  }

  if (sumOfPair > 1000000000) {
    return -1;
  }
  return sumOfPair;
}
