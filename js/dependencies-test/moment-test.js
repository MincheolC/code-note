const moment = require('moment');

function getTimeString(timestamp, format) {
    return moment(timestamp * 1000).format(format);
}

function isToday(timestamp) {
    return moment(timestamp * 1000).isSame(moment(), 'day');
}

// 1599148628 - 2020-09-04 00:57 (GMT+9)
console.log(getTimeString(1599148628, 'MM/DD/YYYY'));
console.log(getTimeString(1599148628, 'A hh:mm'));
console.log(isToday(1599148628));
// 1599116228 - 2020-09-03 15:57 (GRM+9)
console.log(getTimeString(1599116228, 'MM/DD/YYYY'));
console.log(getTimeString(1599116228, 'A hh:mm'));
console.log(isToday(1599116228));
