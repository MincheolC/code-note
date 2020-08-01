const { curry, pipe, Maybe, Either } = require('./fps');

const books = [
  { id: 'book1', title: 'coding with javascript', author: 'Chris Minnick, Eva Holland' },
  { id: 'book2', title: 'speaking javaScript', author: 'Axel Rauschmayer' },
];

const findBookById = curry((id, books) => books.find(book => book.id === id));


const validateMaybeBookAuthor = book => book.author.includes('Axel') ? Maybe.of(book) : Maybe.of(null);
const logByMaybeStatus = maybeAxelBook => maybeAxelBook.isNothing
  ? console.error(`Author: ${maybeAxelBook.value.author}`)  // Error value가 없음.
  : console.log(`Author: ${maybeAxelBook.value.author}`);

// Either는 value가 존재
const validateEitherBookAuthor = book => book.author.includes('Axel') ? Either.right(book) : Either.left(book);
const logByEitherStatus = eitherBook => eitherBook.isLeft
    ? console.error(`Author: ${eitherBook.value.author}`)
    : console.log(`Author: ${eitherBook.value.author}`);

const logBookAuthor = book => console.log(`Author: ${book.author}`);
const logErrorBookAuthor = book => console.error(`Author: ${book.author}`);
const either = curry((l, r, e) => e.isLeft ? l(e.value) : r(e.value));

const logAuthor = (bookId, books) => {
  pipe(
    findBookById(bookId),
    // validateMaybeBookAuthor,
    // logByMaybeStatus,
    validateEitherBookAuthor,
    // logByEitherStatus,
    either(logErrorBookAuthor, logBookAuthor)
  )(books)
}

logAuthor('book1', books)
logAuthor('book2', books)