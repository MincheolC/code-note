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
    let impactFactor = "Z";

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
    let impactFactor = from === to ? temp[points[from]].self : "Z";

    for (let j = from; j < to; j += 1) {
      if (impactFactor > temp[points[from]].right) {
        impactFactor = temp[points[from]].right;
      }
    }
    queryResults.push(impactFactors[impactFactor]);
  }
  return queryResults;
}

function isOdd(n) {
  return n % 2 === 1;
}

function compareImpactFactor(a, b) {
  if (!b) {
    return a;
  }
  return a < b ? a : b;
}

function convertImpactFactor(c) {
  switch (c) {
    case 'A':
      return 1;
    case 'C':
      return 2;
    case 'G':
      return 3;
    case 'T':
      return 4;
    default:
      return null;
  }
}

function buildTree(currentNodes, indexedTree) {
  if (currentNodes.length <= 1) {
    return;
  }
  const parentNodes = [];
  const loopCount = (currentNodes.length % 2)
    ? parseInt(currentNodes.length / 2, 10) + 1
    : parseInt(currentNodes.length / 2, 10);

  for (let i = 0; i < loopCount; i += 1) {
    const a = currentNodes[2 * i];
    const b = currentNodes[2 * i + 1];
    parentNodes.push(compareImpactFactor(a, b));
  }
  indexedTree.push(parentNodes);
  buildTree(parentNodes, indexedTree);
}

function getMinimumImpact(compareList) {
  let impact = "Z";
  compareList.forEach((element) => {
    if (impact > element) {
      impact = element;
    }
  });
  return convertImpactFactor(impact);
}

function getImpactFactor(from, to, indexedTree) {
  const compareList = [];
  let f = from;
  let t = to;
  let index = 0;

  if (f === t) {
    compareList.push(indexedTree[index][f]);
    return getMinimumImpact(compareList);
  }

  if (isOdd(f)) {
    compareList.push(indexedTree[index][f]);
    f += 1;

    if (f === t) {
      compareList.push(indexedTree[index][t]);
      return getMinimumImpact(compareList);
    }
  }

  if (!isOdd(t)) {
    compareList.push(indexedTree[index][t]);
    t -= 1;
    if (f === t) {
      compareList.push(indexedTree[index][f]);
      return getMinimumImpact(compareList);
    }
  }

  while (f != t) {
    index += 1;
    f = parseInt(f / 2, 10);
    t = parseInt(t / 2, 10);
    if (f === t) {
      compareList.push(indexedTree[index][f]);
      break;
    }
    if (isOdd(f)) {
      compareList.push(indexedTree[index][f]);
      f += 1;
    }
    if (!isOdd(t)) {
      compareList.push(indexedTree[index][t]);
      t -= 1;
    }
  }
  return getMinimumImpact(compareList);
}

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  const s = Array.from(S);
  const indexedTree = [s];
  const impactFactors = [];

  buildTree(s, indexedTree);

  for (let i = 0; i < P.length; i += 1) {
    const from = P[i];
    const to = Q[i];

    impactFactors.push(getImpactFactor(from, to, indexedTree));
  }

  return impactFactors;
}
