const { utcToZonedTime, zonedTimeToUtc } = require('date-fns-tz')
const getUnixTime = require('date-fns/getUnixTime');
const getTime = require('date-fns/getTime');

const date = new Date('2020-09-01');

console.log(date)
console.log(utcToZonedTime('2020-09-01', 'Asia/Seoul'))
console.log(getUnixTime(utcToZonedTime('2020-09-01', 'Asia/Seoul')))
console.log(utcToZonedTime(Date.now(), 'Asia/Seoul'))
console.log(getUnixTime(utcToZonedTime(Date.now(), 'Asia/Seoul')))
console.log(getTime(utcToZonedTime('2020-05-24 08:00:00', 'Asia/Seoul')))
console.log(getTime(utcToZonedTime('2020-05-24 12:00:00', 'Asia/Seoul')))
