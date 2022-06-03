const ftoc = function (fahrenheit) {
  celsius = (fahrenheit - 32) / 1.8;
  return parseFloat(celsius.toFixed(1));
};

const ctof = function (celsius) {
  fahrenheit = celsius * 1.8 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

//Fahrenheigh to Celsius
console.log(ftoc(30));

//Celsius to Fahrenheigh
console.log(ctof(-10));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
