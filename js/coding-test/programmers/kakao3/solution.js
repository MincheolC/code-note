function isSameArr(a, b) {
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > -1 && a[i] !== b[i]) return false;
  }
  return true;
}

function isDiamond(arr, i, j) {
  const case1 = [-1, 1, -1, 1, 0, 1, -1, 1, -1];
  const case2 = [-1, 0, -1, 0, 0, 0, -1, 0, -1];
  const temp = [
    arr[i - 1][j - 1],
    arr[i - 1][j],
    arr[i - 1][j + 1],
    arr[i][j - 1],
    arr[i][j],
    arr[i][j + 1],
    arr[i + 1][j - 1],
    arr[i + 1][j],
    arr[i + 1][j + 1],
  ];
  if (isSameArr(case1, temp)) return true;
  if (isSameArr(case2, temp)) {
    return dfs(arr, i, j, {});
  }
}

function isPartOfDiamond(arr, i, j) {
  const center = [-1, 0, -1, 0, 0, 0, -1, 0, -1];
  const north = [0, 1, 0, 1, 0, 1, -1, -1, -1];
  const east = [0, 1, -1, 0, 0, 1, 0, 1, -1];
  const south = [0, 0, 0, 1, 0, 1, -1, 1, -1];
  const west = [-1, 1, 0, 1, 0, 0, -1, 1, 0];

  const temp = [
    arr[i - 1][j - 1],
    arr[i - 1][j],
    arr[i - 1][j + 1],
    arr[i][j - 1],
    arr[i][j],
    arr[i][j + 1],
    arr[i + 1][j - 1],
    arr[i + 1][j],
    arr[i + 1][j + 1],
  ];
  if (isSameArr(center, temp)) return true;
  if (isSameArr(north, temp)) return true;
  if (isSameArr(east, temp)) return true;
  if (isSameArr(south, temp)) return true;
  if (isSameArr(west, temp)) return true;
  return false;
}

function isCenter(arr, i, j) {
  const center = [-1, 0, -1, 0, 0, 0, -1, 0, -1];
  const temp = [
    arr[i - 1][j - 1],
    arr[i - 1][j],
    arr[i - 1][j + 1],
    arr[i][j - 1],
    arr[i][j],
    arr[i][j + 1],
    arr[i + 1][j - 1],
    arr[i + 1][j],
    arr[i + 1][j + 1],
  ];
  if (isSameArr(center, temp)) return true;
  return false;
}

function dfs(arr, i, j, visited) {
  if (visited[`${i}${j}`]) return true;
  if (i < 1 || j < 1) return false;
  visited[`${i}${j}`] = 1;
  if (isCenter(arr, i, j))
    return (
      dfs(arr, i - 1, j, visited) &&
      dfs(arr, i, j - 1, visited) &&
      dfs(arr, i, j + 1, visited) &&
      dfs(arr, i + 1, j, visited)
    );
  return isPartOfDiamond(arr, i, j);
}

function solution(board) {
  const n = board.length;
  let count = 0;
  for (let i = 1; i < n - 1; i += 1) {
    for (let j = 1; j < n - 1; j += 1) {
      const diamond = isDiamond(board, i, j);
      count = diamond ? count + 1 : count;
    }
  }
  return count;
}
