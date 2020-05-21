function solution(genres, plays) {
  const answer = [];
  const playsGroupByGenre = {};
  const totalPlaysGroupByGenre = {};

  genres.forEach((genre, index) => {
    const bundle = [index, plays[index]];
    if (!playsGroupByGenre[genre]) {
      playsGroupByGenre[genre] = [bundle];
      totalPlaysGroupByGenre[genre] = plays[index];
    } else {
      playsGroupByGenre[genre].push(bundle);
      totalPlaysGroupByGenre[genre] += plays[index];
    }
  });

  Object.keys(playsGroupByGenre).forEach((key) => {
    playsGroupByGenre[key].sort((a, b) => b[1] - a[1]);
  });

  const temp = [];
  Object.entries(totalPlaysGroupByGenre).forEach(keyValue => temp.push(keyValue));

  const genreOrderDesc = temp
    .sort((a, b) => b[1] - a[1])
    .map(([genre]) => genre);
  genreOrderDesc.forEach((genre) => {
    let i = 0;
    while (playsGroupByGenre[genre][i] && i < 2) {
      answer.push(playsGroupByGenre[genre][i][0]);
      i += 1;
    }
  });

  return answer;
}

function solution2(genres, plays) {
  const dic = {};
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  const dupDic = {};
  return genres
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map(t => t.index);
}

function solution3(genres, plays) {
  const totalPlaysByGenre = {};

  const groupByGenre = genres.reduce((obj, genre, index) => {
    const newObj = obj;
    if (!newObj[genre]) newObj[genre] = [];
    newObj[genre].push([index, plays[index]]);
    return newObj;
  }, {});
  Object.keys(groupByGenre).forEach(
    key => groupByGenre[key].sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[0] - b[0]))
  );

  genres.forEach((genre, index) => {
    totalPlaysByGenre[genre] = totalPlaysByGenre[genre]
      ? totalPlaysByGenre[genre] + plays[index]
      : plays[index];
  });

  const totalPlaysByGenreInArray = [];
  Object.entries(totalPlaysByGenre).forEach(keyValue => totalPlaysByGenreInArray.push(keyValue));

  const answer = totalPlaysByGenreInArray
    .sort((a, b) => b[1] - a[1])
    .reduce((result, [genre]) => {
      let i = 0;
      while (groupByGenre[genre][i] && i < 2) {
        result.push(groupByGenre[genre][i][0]);
        i += 1;
      }
      return result;
    }, []);

  return answer;
}
