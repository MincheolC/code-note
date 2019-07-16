const assert = require('assert');

function solutionSlow(inputArray) {
  const [neverHeardCount, neverSeenCount] = inputArray[0].split(' ').map(element => parseInt(element, 10));

  const neverHeard = inputArray.slice(1, neverHeardCount + 1);
  assert.strictEqual(neverHeardCount, neverHeard.length);

  const neverSeen = inputArray.slice(neverHeardCount + 1, inputArray.length);
  assert.strictEqual(neverSeenCount, neverSeen.length);

  const neverHeardAndSeen = neverHeard.filter(neverHeardName => neverSeen.includes(neverHeardName));
  neverHeardAndSeen.sort().unshift(neverHeardAndSeen.length.toString());
  return neverHeardAndSeen;
}

function solution(inputArray) {
  const [neverHeardCount, neverSeenCount] = inputArray[0].split(' ').map(element => parseInt(element, 10));

  const neverHeard = inputArray.slice(1, neverHeardCount + 1);
  assert.strictEqual(neverHeardCount, neverHeard.length);

  const neverSeen = inputArray.slice(neverHeardCount + 1, inputArray.length);
  assert.strictEqual(neverSeenCount, neverSeen.length);

  const neverHeardAndSeen = [];
  const neverHeardObj = {};
  neverHeard.forEach((element) => { neverHeardObj[element] = 1; });
  neverSeen.forEach((element) => {
    if (neverHeardObj[element]) {
      neverHeardAndSeen.push(element);
    }
  });
  neverHeardAndSeen.sort().unshift(neverHeardAndSeen.length.toString());
  return neverHeardAndSeen;
}

module.exports = {
  solution,
  solutionSlow,
};
