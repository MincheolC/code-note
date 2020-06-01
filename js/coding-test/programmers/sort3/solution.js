function solution(citations) {
  const sortedCitations = Array.from(citations).sort((a, b) => a - b);
  const totalPaperCount = sortedCitations.length;

  let index = parseInt(totalPaperCount / 2, 10);
  let minimumPaperCount = sortedCitations[index];
  let citedPaperCount = totalPaperCount - index;
  let hIndex = -1;

  if (citedPaperCount < minimumPaperCount) {
    // move index left until cpc >= mpc
    while (citedPaperCount < minimumPaperCount && index > -1) {
      index -= 1;
      citedPaperCount = totalPaperCount - index;
      minimumPaperCount = sortedCitations[index];
    }
    hIndex =
      minimumPaperCount === undefined
        ? totalPaperCount
        : Math.max(citedPaperCount - 1, minimumPaperCount);
  } else {
    // move index right until cpc < mpc
    while (citedPaperCount >= minimumPaperCount && index < totalPaperCount) {
      index += 1;
      citedPaperCount = totalPaperCount - index;
      minimumPaperCount = sortedCitations[index];
    }
    hIndex = Math.max(citedPaperCount, sortedCitations[index - 1]);
  }
  return hIndex;
}

function solution1(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i += 1;
  }
  return i;
}
