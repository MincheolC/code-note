function solution1(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  const impactFactors = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const queryResults = [];

  for (let i = 0; i < P.length; i += 1) {
    let queryResult = 'Z';
    const from = P[i];
    const to = Q[i];
    for (let j = from; j <= to; j += 1) {
      if (S[j] === 'A') {
        queryResult = S[j];
        break;
      } else if (S[j] < queryResult) {
        queryResult = S[j];
      }
    }
    queryResults.push(impactFactors[queryResult]);
  }
  return queryResults;
}

function solution2(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  const impactFactors = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const temp = {};

  P.forEach((element) => {
    temp[element] = {
      left: null,
      right: null,
    };
  });

  Q.forEach((element) => {
    temp[element] = {
      left: null,
      right: null,
    };
  });

  const points = Object.keys(temp)
    .map(Number)
    .sort((a, b) => a - b);
  const indexes = {};

  indexes[points[0]] = 0;
  temp[points[0]].self = S[points[0]];
  for (let i = 0; i < points.length - 1; i += 1) {
    const from = points[i];
    const to = points[i + 1];
    let impactFactor = 'Z';

    for (let j = from; j <= to; j += 1) {
      if (impactFactor > S[j]) {
        impactFactor = S[j];
      }
    }
    temp[from].right = impactFactor;
    temp[to].left = impactFactor;
    temp[to].self = S[to];
    indexes[points[i + 1]] = i + 1;
  }

  const queryResults = [];
  for (let i = 0; i < P.length; i += 1) {
    const from = indexes[P[i]];
    const to = indexes[Q[i]];
    let impactFactor = from === to ? temp[points[from]].self : 'Z';

    for (let j = from; j < to; j += 1) {
      if (impactFactor > temp[points[from]].right) {
        impactFactor = temp[points[from]].right;
      }
    }
    queryResults.push(impactFactors[impactFactor]);
  }
  return queryResults;
}
