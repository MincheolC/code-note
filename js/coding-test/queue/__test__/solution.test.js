const path = require('path');
const fs = require('fs');
const {
  solution,
} = require('../solution');

const input = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString().split('\n');

describe('solution', () => {
  it('should be return right answer', () => {
    const expected = ['1', '2', '2', '0', '1', '2', '-1', '0', '1', '-1', '0', '3'];
    expect(solution(input)).toEqual(expected);
  });
});
