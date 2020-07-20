const _ = require('lodash');
const { pipe, propEq } = require('rambda');

const books = [
  { id: 'book1', title: 'coding with javascript', author: 'Chris Minnick, Eva Holland' },
  { id: 'book2', title: 'speaking javaScript', author: 'Axel Rauschmayer' },
];

const getBookById = _.curry((books, id) => {
  return pipe(
    _.find(propEq('id', id)),
    Maybe.of
  )(books)
});

console.log(getBookById(books)('id'));