function isValidMap(s) {
  const map = new Map();

  console.time('Map set');
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    const c = map.get(char);
    if (c) {
      map.set(char, c + 1);
    } else {
      map.set(char, 1);
    }
  }
  console.timeEnd('Map set');

  const diff = [];
  let pivot = null;
  map.forEach((value) => {
    if (pivot === null) {
      pivot = value;
    }
    if (pivot !== value) {
      diff.push(value);
    }
  });

  if (diff.length > 1) {
    return 'NO';
  }

  if (diff.length === 1) {
    return (Math.abs(diff[0] - pivot) === 1) || diff[0] === 1 ? 'YES' : 'NO';
  }

  return 'YES';
}

function isValidObj(s) {
  const map = {};

  console.time('Object set');
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    const c = map[char];
    if (c) {
      map[char] = c + 1;
    } else {
      map[char] = 1;
    }
  }
  console.timeEnd('Object set');

  const diff = [];
  let pivot = null;
  Object.values(map).forEach((value) => {
    if (pivot === null) {
      pivot = value;
    }
    if (pivot !== value) {
      diff.push(value);
    }
  });

  if (diff.length > 1) {
    return 'NO';
  }

  if (diff.length === 1) {
    return Math.abs(diff[0] - pivot) === 1 || diff[0] === 1 ? 'YES' : 'NO';
  }

  return 'YES';
}

console.time('Map');
isValidMap(
  'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd',
);
console.timeEnd('Map');
console.time('Object');
isValidObj(
  'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd',
);
console.timeEnd('Object');

