class Maybe {
  constructor(value) {
    this.value = value;
  }

  static of (value) {
    return new Maybe(value);
  }

  get isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.value));
  }

  toString() {
    return this.isNothing ? 'Nothing' : `Just(${this.value})`
  }
}

class Either {
  constructor(value){
    this.value = value;
  }

  static right(value) {
    return new Right(value)
  }

  static left(value) {
    return new Left(value);
  }
}

class Right extends Either {
  get isRight() {
    return true;
  }

  get isLeft() {
    return false
  }

  map(fn) {
    return new Right(fn(this.value));
  }
}

// Left map은 함수를 실행하지 않음.
class Left extends Either {
  get isRight() {
    return false;
  }

  get isLeft() {
    return true;
  }

  map(fn) {
    return this;
  }
}

class IO {
  static of(value) {
    return new IO(() => value);
  }

  constructor(fn) {
    this.value = fn;
  }

  map(fn) {
    return new IO( pipe( this.value, fn ) );
  }

  runIO() {
    return this.value();
  }
}

const curry = (fn) => {
  const arity = fn.length; // 인수
  return function _curry(...args) {
    if (args.length < arity) return _curry.bind(null, ...args);
    return fn.call(null, ...args);
  }
}

const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
  }
}

const pipe = (...fns) => {
  return (...args) => {
    return fns.reduce((res, fn) =>[fn.call(null, ...res)], args)[0];
  }
}

module.exports = {
  Maybe,
  Either,
  IO,
  curry,
  pipe,
  compose,
}