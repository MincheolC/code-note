// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function findHighestHeight(buildings) {
  return buildings.reduce((currentHighestHeight, height) => (
    currentHighestHeight > height ? currentHighestHeight : height));
}

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  const buildings = Array.from(H);
  const highestBuildingHeight = findHighestHeight(buildings);

  const highestBuildingIndexes = buildings.reduce((indexes, height, index) => {
    if (height === highestBuildingHeight) {
      indexes.push(index);
    }
    return indexes;
  }, []);

  const firstHighestBuildingIndex = highestBuildingIndexes[0];
  const LastHighestBuildingIndex = highestBuildingIndexes[highestBuildingIndexes.length - 1];
  const n = buildings.length;
  const startIndex = 0;
  const endIndex = n - 1;

  if (firstHighestBuildingIndex === startIndex && LastHighestBuildingIndex === endIndex) {
    return highestBuildingHeight * n;
  }

  if (
    firstHighestBuildingIndex === startIndex && LastHighestBuildingIndex >= startIndex) {
    const secondHighestHeight = findHighestHeight(
      buildings.slice(LastHighestBuildingIndex + 1, n),
    );
    return (highestBuildingHeight * (LastHighestBuildingIndex + 1) + secondHighestHeight * (
      endIndex - LastHighestBuildingIndex));
  }

  if (firstHighestBuildingIndex > startIndex && LastHighestBuildingIndex === endIndex) {
    const secondHighestHeight = findHighestHeight(
      buildings.slice(startIndex, firstHighestBuildingIndex),
    );
    return (secondHighestHeight * firstHighestBuildingIndex + highestBuildingHeight * (
      n - firstHighestBuildingIndex));
  }

  const frontSecondHighestHeight = findHighestHeight(
    buildings.slice(startIndex, firstHighestBuildingIndex),
  );
  const frontSecondHighestSize = frontSecondHighestHeight * firstHighestBuildingIndex;

  const backSecondHighestHeight = findHighestHeight(
    buildings.slice(LastHighestBuildingIndex + 1, n),
  );
  const backSecondHighestSize = backSecondHighestHeight * (endIndex - LastHighestBuildingIndex);

  if (frontSecondHighestSize <= backSecondHighestSize) {
    return (frontSecondHighestSize + highestBuildingHeight * (n - firstHighestBuildingIndex));
  }
  return (highestBuildingHeight * (LastHighestBuildingIndex + 1) + backSecondHighestSize);
}
