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
/*
 * imperative execute time:  6
 * functional execute time:  22
 * functionalLazy execute time:  9
 */
const arr = Array(1000000).fill(1);
arr[2000] = 10;

let startTime = new Date().getTime();
imperative(arr);
let endTime = new Date().getTime();
console.log("imperative execute time: ", endTime - startTime);

startTime = new Date().getTime();
functional(arr);
endTime = new Date().getTime();
console.log("functional execute time: ", endTime - startTime);

startTime = new Date().getTime();
functionalLazy(arr);
endTime = new Date().getTime();
console.log("functionalLazy execute time: ", endTime - startTime);

