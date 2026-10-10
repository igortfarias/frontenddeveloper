function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(5, 3));

function hourIntoSeconds(hours) {
  return hours * 3600;
}

console.log(hourIntoSeconds(2));

function calcPerimeter(length, width) {
  return 2 * (length + width);
}

console.log(calcPerimeter(5, 3));

function calcTriangleArea(base, height) {
  return 0.5 * base * height;
}

console.log(calcTriangleArea(10, 10));

function appendFrontend(string) {
  return "Frontend " + string;
}

console.log(appendFrontend("Banana"));

function sumGreaterThan100(num1, num2) {
  return (num1 + num2) > 100;
}

console.log(sumGreaterThan100(50, 60)); // true
console.log(sumGreaterThan100(30, 40)); // false

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

console.log(lessThanOrEqualToZero(5)); // false
console.log(lessThanOrEqualToZero(-3)); // true

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(true)); // false
console.log(oppositeBoolean(false)); // true

function isNotZero(num) {
  return num !== 0;
}

console.log(isNotZero(5)); // true
console.log(isNotZero(0)); // false

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(4, 2)); // 0
console.log(calcRemainder(15, 4)); // 3

function  isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(5)); // true
console.log(isOdd(4)); // false

function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(5)); // -1
console.log(booleanInteger(4)); // 1

function isLoggedAndSubscribed(isLogged, isSubscribed) {
  return isLogged && isSubscribed;
}

console.log(isLoggedAndSubscribed(true, true)); // true
console.log(isLoggedAndSubscribed(true, false)); // false
console.log(isLoggedAndSubscribed(false, true)); // false
console.log(isLoggedAndSubscribed(false, false)); // false