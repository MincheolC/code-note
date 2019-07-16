const path = require('path');
const fs = require('fs');
const { solution } = require('../solution');

const input = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString().split('\n');

describe('solution', () => {
  it('should be return the number of unknown people and their names', () => {
    const expected = ['2', 'baesangwook', 'ohhenrie'];
    expect(solution(input)).toEqual(expected);
  });
});
