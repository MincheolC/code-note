const path = require('path');
const fs = require('fs');
const {
  solution,
} = require('../solution');

const input1 = fs.readFileSync(path.resolve(__dirname, './input1.txt')).toString().split('\n');
const input2 = fs.readFileSync(path.resolve(__dirname, './input2.txt')).toString().split('\n');

describe('solution', () => {
  it('should be return right answer', () => {
    const expected1 = ['2', '2', '0', '2', '1', '-1', '0', '1', '-1', '0', '3'];
    const expected2 = ['-1', '-1', '123', '123', '-1', '-1'];

    expect(solution(input1)).toEqual(expected1);
    expect(solution(input2)).toEqual(expected2);
  });
});
