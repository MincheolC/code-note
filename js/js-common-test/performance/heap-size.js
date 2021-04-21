const { printMemoryUsage } = require('../helpers/utils');

const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
const arr1 = Array(1e6).fill('some string');
printMemoryUsage();