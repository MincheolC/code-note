function isOdd(n) {
  return n % 2 === 1;
}

function isValidArray(n) {
  return isOdd(n) && n >= 1 && n <= 1000000;
}

function isValidElement(n) {
  return n >= 1 && n <= 1000000000;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const len = A.length;
  if (!isValidArray(len)) {
    throw new Error('invalid array');
  }

  A.forEach((n) => {
    if (!isValidElement(n)) {
      throw new Error('invalid number in array');
    }
  });

  const map = new Map();
  A.forEach((number) => {
    const exValue = map.get(number);
    if (exValue) {
      map.set(number, exValue + 1);
    } else {
      map.set(number, 1);
    }
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of map.entries()) {
    if (isOdd(value)) {
      return key;
    }
  }
}
