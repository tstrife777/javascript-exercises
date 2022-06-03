const repeatString = function (string, num) {
  let words = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    words = words + string;
  }
  return words;
};
console.log(repeatString("", 10));

// Do not edit below this line
module.exports = repeatString;
