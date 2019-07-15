const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.resolve(__dirname, './__test__/sampleInput.txt')).toString().split('\n');

function solution(inputArray) {
  const regExp = '^[a-zA-Z]+$';
  const filteredString = inputArray.filter(value => typeof value === 'string' && value.match(regExp));
  const obj = {};
  filteredString.forEach((value) => {
    obj[value] = null;
  });
  return Object.keys(obj).sort((a, b) => a.length - b.length || a.localeCompare(b));
}

const output = solution(input);
output.forEach(value => console.log(value));
