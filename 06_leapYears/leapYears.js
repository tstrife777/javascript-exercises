//If remainer is true dividing X by 4
//Then divisable by 4, leapyear true
//If remainer is true dividing X by 100
//Then divisable by 100, leapyear NOt true
//If remainer is true dividing X by 400
//Then divisable by 400, leapyear true

const leapYears = function (year) {
  let leapYear = false;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leapYear = true;
  }
  return leapYear;
};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
