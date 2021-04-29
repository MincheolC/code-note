const THRESHOLD_A = 8;

function tetheredGetNumber(resolve, reject) {
  setTimeout(function () {
    const randomInt = Date.now();
    const value = randomInt % 10;
    try {
      if (value >= THRESHOLD_A) {
        throw new Error(`Too large: ${value}`);
      }
    } catch (msg) {
      reject(`Error in callback ${msg}`);
    }
    resolve(value);
    return;
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Trouble getting number: ${reason}`);
  throw -999;
}

function promiseGetWord(parityInfo) {
  const tetheredGetWord = (resolve, reject) => {
    const theNumber = parityInfo.theNumber;
    const threshold_B = THRESHOLD_A - 1;
    if (theNumber >= threshold_B) {
      reject(`Still too large: ${theNumber}`);
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
      resolve(parityInfo);
    }
    return;
  };
  return new Promise(tetheredGetWord);
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log('Got: ', info.theNumber, ' , ', info.wordEvenOdd);
    return info;
  })
  .catch((reason) => {
    if (reason === -999) {
      console.error('Had previously handled error');
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log('All done'));