function getMonths(from, n, isString = false) {
    const monthsString = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const months = isString ? monthsString : monthsNumber;
    const rest = n + from - 12;

    return rest > 0 ? months.slice(from, 12).concat(months.slice(0, rest)) : months.slice(from, n);
}

console.log(getMonths(1, 12));
console.log(getMonths(4, 12));
