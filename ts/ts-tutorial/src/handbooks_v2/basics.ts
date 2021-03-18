/*
 * The Basics https://www.typescriptlang.org/docs/handbook/2/basic-types.html
 */

function greeting(person: string, date: Date) {
  console.log(`${person}!! ${date.toDateString()}`);
}
greeting('Charles', new Date());
