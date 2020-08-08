const { Maybe, map } = require('./fps')
const { curry, pipe, find, propEq } = require('rambda');

const books = [
  { id: 'book1', title: 'coding with javascript', author: 'Chris Minnick, Eva Holland' },
  { id: 'book2', title: 'speaking javaScript', author: 'Axel Rauschmayer' },
];

const getBookById = curry((books, id) => {
  return pipe(
    find(propEq('id', id)),
    Maybe.of
  )(books)
});

const validateAuthorAxel = book => book.author.includes('Axel') ? Maybe.of(book) : Maybe.of(null);
const logProp = curry((prop, value) => console.log(value[prop]));

const printAxelBookTitle = pipe(
  getBookById(books),
  map(validateAuthorAxel),
  map(map(logProp('title'))) // Functor타입이 리턴되면 두번 벗겨줘야하는 문제가 있음.
)

printAxelBookTitle('book1');
printAxelBookTitle('book2');
