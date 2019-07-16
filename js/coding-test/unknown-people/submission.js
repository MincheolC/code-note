const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.resolve(__dirname, './__test__/input.txt')).toString().split('\n');

function solution(inputArray) {
  const [neverHeardCount] = inputArray[0].split(' ').map(element => parseInt(element, 10));

  const neverHeard = inputArray.slice(1, neverHeardCount + 1);
  const neverSeen = inputArray.slice(neverHeardCount + 1, inputArray.length);

  const neverHeardAndSeen = neverHeard.filter(neverHeardName => neverSeen.includes(neverHeardName));
  neverHeardAndSeen.sort().unshift(neverHeardAndSeen.length.toString());
  return neverHeardAndSeen;
}

const output = solution(input);
output.forEach(value => console.log(value));
