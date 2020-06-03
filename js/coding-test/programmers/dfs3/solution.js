function bfs(begin, target, words) {
  const queue = [{ word: begin, depth: 0 }];
  const visited = [];

  while (queue.length > 0) {
    const { word, depth } = queue.shift();
    if (target === word) return depth;
    words.forEach((elem) => {
      if (!visited[elem] && isNeighborWord(word, elem)) {
        queue.push({ word: elem, depth: depth + 1 });
        visited[elem] = 1;
      }
    });
  }
}

function isNeighborWord(a, b) {
  const aList = Array.from(a);
  const bList = Array.from(b);

  let diffCount = 0;
  aList.forEach((element, index) => {
    if (element !== bList[index]) diffCount += 1;
  });
  return diffCount === 1;
}

function solution(begin, target, words) {
  return bfs(begin, target, words) || 0;
}

const begin = 'hit';
const target = 'cog';
const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

console.log(solution(begin, target, words));