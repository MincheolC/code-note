const { curry, pipe } = require('./fps');

const f = a => a + 1;
const g = b => b * 2;

// js의 array는 functor 객체
const functor = [1, 2, 3];
const newFunctor = functor.map(g).map(f);
const newFunctor2 = functor.map(x => f(g(x)));

// [3, 5, 7]  [3, 5, 7]
// console.log(newFunctor, newFunctor2);

/**
 * Maybe를 활용한 undefine나 null 해결. 함수 컴포지션에서 에러 처리시에 아주 우아하게 처리할 수 있게 도와주는 함수자.
 */

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

const books = [
  { id: 'book1', title: 'coding with javascript' },
  { id: 'book2', title: 'speaking javaScript' },
];

const startCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const prop = curry((propName, obj) => obj[propName]);
const findBookById = curry((id, books) => books.find((book) => book.id === id));
const map = curry((fn, functor) => functor.map(fn));
const getOrElse = curry((defaultValue, fn, maybe) => maybe.isNothing ? defaultValue : fn(maybe.value));

const getUpperBookTitleById = (id, books) => {
  return pipe(
    Maybe.of,
    map(findBookById(id)),
    map(prop('title')),
    getOrElse(`${id} Not Found`, startCase),
  )(books)
};

console.log('' + getUpperBookTitleById('book1', books));
console.log('' + getUpperBookTitleById('book2', books));
console.log('' + getUpperBookTitleById('book3', books));

module.exports = {
  Maybe,
}
