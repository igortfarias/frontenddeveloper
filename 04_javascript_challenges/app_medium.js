function falsyChecker(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(falsyChecker(false, true)); // false
console.log(falsyChecker(0, 500)); // 0
console.log(falsyChecker(true, 'dog')); // 'dog'

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3])); // 3
console.log(arrLength([])); // 0

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([1, 2, 3])); // 3
console.log(lastElem(['a', 'b', 'c'])); // 'c'

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum([7, 2, 3])); // 12
console.log(arrSum([])); // 0

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(progressiveSum(5)); // 15
console.log(progressiveSum(600)); // 180300

function calcTime(sec) {
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return `${minutes}:${seconds}`;
}

console.log(calcTime(61)); // "1:1"
console.log(calcTime(300)); // "5:0"  

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([1, 2, 3])); // 3
console.log(getMax([10, 5, 8])); // 10

function reverseString(str) {
  // return str.split('').reverse().join('');
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

function convertToZeros(arr) {
  // return arr.map(() => 0);
  // return arr.map(elem => elem * 0);
  // return arr.fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(convertToZeros([1, 2])); // [0, 0]
console.log(convertToZeros([5, 10, 15])); // [0, 0, 0]

function removeApples(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 'apple') {
  //     arr.splice(i, 1);
  //     i--;
  //   }
  // }
  // return arr;
  return arr.filter(elem => elem !== 'apple');
}

console.log(removeApples(['apple', 'banana', 'apple'])); // ['banana']
console.log(removeApples(['orange', 'apple', 'grape'])); // ['orange', 'grape']

function filterOutFalsy(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (!arr[i]) {
  //     arr.splice(i, 1);
  //     i--;
  //   }
  // }
  // return arr;
  return arr.filter(elem => !!elem);
}

console.log(filterOutFalsy([0, 1, false, 2])); // [1, 2]
console.log(filterOutFalsy([false, null, undefined, 'hello'])); // ['hello']

function convertToBooleans(arr) {
  // return arr.map(Boolean);
  // return arr.map(elem => !!elem);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = !!arr[i];
  }
  return arr;
}

console.log(convertToBooleans([0, 1, false, 2])); // [false, true, false, true]
console.log(convertToBooleans([false, null, undefined, 'hello'])); // [false, false, false, true]
