const { IO } = require('./fps');

const localStorage = {};

const getStorage = key => localStorage[key];
const setStorage = (key, val) => localStorage[key] = val;

// 참조 투명성이 꺠짐.
setStorage('tutorial', 'ready');
console.log(getStorage('tutorial')); // ready
setStorage('tutorial', 'complete');
console.log(getStorage('tutorial')); // complte

// IO로 해결.
const getStorageIO = key => new IO(() => localStorage[key]);
setStorage('tutorial', 'ready');
console.log(getStorageIO('tutorial'));
setStorage('tutorial', 'complete');
console.log(getStorageIO('tutorial'));

const getTutorialSteps = status => status === 'ready'
  ? [ {step: 1, title: 'First Tutorial'}, {step: 2, title: 'Second Tutorial'} ]
  : [];

setStorage('tutorial', 'ready');
console.log(getStorageIO('tutorial').map(getTutorialSteps).runIO());
setStorage('tutorial', 'complete');
console.log(getStorageIO('tutorial').map(getTutorialSteps).runIO());