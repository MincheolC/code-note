console.log('\n===== Enums =====');
/*
 * Numeric Enums
 */
enum Direction {
  UP,
  DOWN,
  RIGHT,
  LEFT,
}

console.log('Numeric Enums :', Direction.UP, Direction.DOWN);

/*
 * Computed constant members
 */
enum FileAccess {
  // constant members
  NONE,
  READ = 1 << 1,
  WRITE = 1 << 2,
  READW_WRITE = READ | WRITE,
  // computed member
  G = '123'.length,
  TWO = 1 + 1,
  MINUS_TWO = -TWO,
}

/*
 * Enums at compile time
 */
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

// This is equivalent to: type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
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
enum Enum {
  A,
}

const ea = Enum.A;
const nameOfA = Enum[ea];
console.log('Reverse Mapping ', ea, nameOfA);

enum StrEnum {
  B = 'B',
}

const se = StrEnum.B;
const nameOfB = StrEnum[se];
console.log('No Reverse Mapping String ', se, nameOfB);
