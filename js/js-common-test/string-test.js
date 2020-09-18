const toPhoneString = (s) => {
  return s.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
};

console.log(toPhoneString("022222222"));
console.log(toPhoneString("01066470203"));
console.log(toPhoneString("0196670203"));
console.log(toPhoneString("0428632778"));
