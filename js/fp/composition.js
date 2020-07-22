const { inc } = require("rambda");

const pow = (num1, num2) => {
  return Math.pow(num1, num2);
}

const negate = (num) => {
  return num * -1;
}

const increase = (num) => {
  return num + 1;
}

// 절차적 프로그래밍
console.log(increase(negate(pow(2, 3))));

// 함수형 프로그래밍
const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
  }
}

const pipe = (...fns) => {
  return (...args) => {
    return fns.reduce((res, fn) => [fn.call(null, ...res)], args)[0];
  }
}

const composed = compose(increase, negate, pow)
const piped = pipe(pow, negate, increase)

console.log(composed(2, 3));
console.log(piped(2, 3));
