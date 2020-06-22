const _ = require('lodash');

const imperative = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    const doubleValue = arr[i] * arr[i];
    if (doubleValue > 10) return i;
  }
}
const functional = arr => arr.map(n => n * n).findIndex(n => n > 10)
const functionalLazy = arr => {
  const chained = _.chain(arr);
  return chained.map(n => n * n).findIndex(n => n > 10).value()
}

// 성능 비교: 명령형 vs 함수형
const arr = Array(1000000).fill(1);
arr[200] = 10;

let startTime = new Date().getTime();
console.log(imperative(arr));
let endTime = new Date().getTime();
console.log("imperative execute time: ", endTime - startTime);

startTime = new Date().getTime();
console.log(functional(arr));
endTime = new Date().getTime();
console.log("functional execute time: ", endTime - startTime);

startTime = new Date().getTime();
console.log(functionalLazy(arr));
endTime = new Date().getTime();
console.log("functionalLazy execute time: ", endTime - startTime);


const sum = (a) => {
  const a1 = a + 2;
  console.log(a1);
  return (b) => {
    const b1 = b + 3;
    console.log(b1);
    return (c) => {
      return a1 + b1 + c
    }
  }
}
console.log(sum(1)(2)(3))
const a12 = sum(1)(2);
console.log(a12(4), a12(6), a12(10));
