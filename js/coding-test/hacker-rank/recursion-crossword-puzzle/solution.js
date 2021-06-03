function findHints(hints, i, j, crossword) {
  const isAZ = c => /[A-Z]+/.exec(c);
  let exj;
  let exi;
  let indexj;
  let indexi;
  let sum = 0;
  let direction;
  let isStart = true;

  // 전에 A-Z 존재 여부
  if (isAZ(hints[i][j - 1])) {
    exj = hints[i][j - 1];
    indexj = 0;
    isStart = false;
  }
  if (isAZ(hints[i - 1][j])) {
    exi = hints[i - 1][j];
    indexi = 0;
    isStart = false;
  }

  if (exj || exi) sum += 1;

  /*
   * 후에 - 방향에 따라 개수 설정
   * 1. - 만나오는경우
   * 2. A-Z가 중간에 있는 경우 (해당 위치와 단어 필요)
   */
  if (hints[i + 1][j] === '-' || isAZ(hints[i + 1][j])) {
    // vertical
    let k = i;
    exj = undefined;
    indexj = undefined;
    direction = 'vertical';
    while (hints[k][j] === '-' || isAZ(hints[k][j])) {
      if (isAZ(hints[k][j])) {
        exi = hints[k][j];
        indexi = k - 1 - j;
      }
      sum += 1;
      k += 1;
    }
  } else if (hints[i][j + 1] === '-' || isAZ(hints[i][j + 1])) {
    // horizontal
    let k = j;
    exi = undefined;
    indexi = undefined;
    direction = 'horizontal';
    while (hints[i][k] === '-' || isAZ(hints[i][k])) {
      if (isAZ(hints[i][k])) {
        exj = hints[i][k];
        indexj = k - 1 - i;
      }
      sum += 1;
      k += 1;
    }
  } else {
    sum += 1;
  }

  console.log(sum, exi, indexi, exj, indexj);
  let words;
  if (!exi && !exj) {
    words = crossword.filter(w => w.length === sum);
  } else {
    words = crossword
      .filter(w => w.length === sum)
      .filter((w) => {
        if (exi !== undefined) {
          return w[indexi] === exi;
        }
        if (exj !== undefined) {
          return w[indexj] === exj;
        }
        return false;
      });
  }

  console.log(words);
  return words.map(word => ({
    word,
    direction,
    isStart,
  }));
}

function fillWord(hints, m, n, { word, direction, isStart }) {
  const len = word.length;
  if (isStart) {
    if (direction === 'vertical') {
      for (let i = m; i < m + len; i += 1) {
        hints[i][n] = word[i - m];
      }
    } else {
      for (let i = n; i < n + len; i += 1) {
        hints[n][i] = word[i - m];
      }
    }
  } else if (direction === 'vertical') {
    for (let i = m + 1; i < m + len; i += 1) {
      hints[i][n] = word[i - n];
    }
  } else {
    for (let i = n + 1; i < n + len; i += 1) {
      hints[n][i] = word[i - n];
    }
  }
}

function crosswordPuzzle(crossword, hints, a, b) {
  for (let i = a; i < 11; i += 1) {
    for (let j = b; j < 11; j += 1) {
      if (hints[i][j] === '-') {
        const foundHints = findHints(hints, i, j, crossword);
        foundHints.forEach((foundHint) => {
          const newHints = [...hints];
          fillWord(newHints, i, j, foundHint);
          const restWords = crossword.filter(w => w !== foundHint.word);
          crosswordPuzzle(restWords, newHints, i, j);
        });
      }
    }
  }
}

function expandHints(hints) {
  const arr = [];
  for (let i = 0; i < 12; i += 1) {
    const temp = [];
    for (let j = 0; j < 12; j += 1) {
      temp.push('+');
    }
    arr.push(temp);
  }

  for (let i = 1; i < 11; i += 1) {
    for (let j = 1; j < 11; j += 1) {
      arr[i][j] = hints[i - 1][j - 1];
    }
  }
  return arr;
}

// const sampleHints = [
//   ['+', '+', '+', '+', '+', '+', 'I', '+', '+', '+'],
//   ['+', '+', 'M', 'E', 'X', 'I', 'C', 'O', '+', '+'],
//   ['+', '+', '+', '+', '+', '+', 'E', '+', '+', '+'],
//   ['+', '+', '+', '+', '+', '+', 'L', '+', '+', '+'],
//   ['+', '+', '+', '-', '-', '-', 'A', '-', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', 'N', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', 'D', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '+', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '+', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '+', '+', '-', '+'],
// ];

// const sampleHints = [
//   ['+', '+', '+', '+', '+', '+', '-', '+', '+', '+'],
//   ['+', '+', '-', '-', '-', '-', '-', '-', '+', '+'],
//   ['+', '+', '+', '+', '+', '+', '-', '+', '+', '+'],
//   ['+', '+', '+', '+', '+', '+', '-', '+', '+', '+'],
//   ['+', '+', '+', '-', '-', '-', '-', '-', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '-', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '-', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '+', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '+', '+', '-', '+'],
//   ['+', '+', '+', '+', '+', '+', '+', '+', '-', '+'],
// ];

const sampleHints = [
  ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
  ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
  ['+', '-', '+', '+', '+', '+', '+', '+', '+', '+'],
  ['+', '-', '-', '-', '-', '-', '+', '+', '+', '+'],
  ['+', '-', '+', '+', '+', '-', '+', '+', '+', '+'],
  ['+', '-', '+', '+', '+', '-', '+', '+', '+', '+'],
  ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+'],
  ['+', '+', '-', '-', '-', '-', '-', '-', '+', '+'],
  ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+'],
  ['+', '+', '+', '+', '+', '-', '+', '+', '+', '+'],
];

// const crosswords = ['ICELAND', 'MEXICO', 'PANAMA', 'ALMATY'];
const crosswords = ['LONDON', 'DELHI', 'ICELAND', 'ANKARA'];

const shints = expandHints(sampleHints);
// const foundhints = findHints(shints, 1, 2, crosswords);
// fillWord(shints, 1, 2, foundhints[0]);
// console.log(foundhints);

crosswordPuzzle(crosswords, shints, 1, 1);
