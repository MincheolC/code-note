const { utcToZonedTime, zonedTimeToUtc } = require('date-fns-tz')
const getUnixTime = require('date-fns/getUnixTime');

const date = new Date('2020-09-01');

console.log(date)
console.log(utcToZonedTime('2020-09-01', 'Asia/Seoul'))
console.log(getUnixTime(utcToZonedTime('2020-09-01', 'Asia/Seoul')))