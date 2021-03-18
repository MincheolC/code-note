"use strict";
console.log('\n===== Enums =====');
/*
 * Numeric Enums
 */
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
    Direction[Direction["LEFT"] = 3] = "LEFT";
})(Direction || (Direction = {}));
console.log('Numeric Enums :', Direction.UP, Direction.DOWN);
/*
 * Computed constant members
 */
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["NONE"] = 0] = "NONE";
    FileAccess[FileAccess["READ"] = 2] = "READ";
    FileAccess[FileAccess["WRITE"] = 4] = "WRITE";
    FileAccess[FileAccess["READW_WRITE"] = 6] = "READW_WRITE";
    // computed member
    FileAccess[FileAccess["G"] = '123'.length] = "G";
    FileAccess[FileAccess["TWO"] = 2] = "TWO";
    FileAccess[FileAccess["MINUS_TWO"] = -2] = "MINUS_TWO";
})(FileAccess || (FileAccess = {}));
/*
 * Enums at compile time
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is:', key);
        console.log('Log level value is:', num);
        console.log('Log level message is:', message);
    }
}
printImportant('ERROR', 'This is a message');
/*
 * Reverse Mapping
 */
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
const ea = Enum.A;
const nameOfA = Enum[ea];
console.log('Reverse Mapping ', ea, nameOfA);
var StrEnum;
(function (StrEnum) {
    StrEnum["B"] = "B";
})(StrEnum || (StrEnum = {}));
const se = StrEnum.B;
const nameOfB = StrEnum[se];
console.log('No Reverse Mapping String ', se, nameOfB);
//# sourceMappingURL=enums.js.map