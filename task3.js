let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

function multipleOfThree(number) {
  let result = number % 3 === 0;
  return result;
}

function multipleOfFive(number) {
  let result = number % 5 === 0;
  return result;
}
function multipleOfSixty(number) {
  let result = number % 60 === 0;
  return result;
}
function multipleOfNinety(number) {
  let result = number % 90 === 0;
  return result;
}
someNumbers.some(multipleOfThree);

console.log(someNumbers.some(multipleOfThree));
console.log(someNumbers.some(multipleOfFive));
console.log(someNumbers.some(multipleOfSixty));
console.log(someNumbers.some(multipleOfNinety));
