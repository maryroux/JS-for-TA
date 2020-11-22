//task_1
let arr = [2, 3, 4, 5];
let res1 = 1;
for (let i = 0; i < arr.length; i++) {
  res1 *= arr[i];
}
console.log("Result_1: " + res1);

let res2 = 1;
let i = 0;
while (i < arr.length) {
  res2 *= arr[i];
  i++;
}
console.log("Result_2: " + res2);

//task_2
for (let i = 0; i < 16; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//task_3
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randArray(k, min, max, func) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(func(min, max));
  }
  console.log(arr);
}
randArray(5, 1, 500, randomNumber);

//task_4
function raiseToDegree(a, b) {
  let numA = parseFloat(a);
  let numB = parseFloat(b);
  if (!Number.isInteger(numA) && !Number.isInteger(numB)) {
    return "Enter integer numbers!";
  }
  return numA ** numB;
}
let a = prompt("Enter number a: ");
let b = prompt("Enter number b: ");
console.log(raiseToDegree(a, b));

//task_5
function findMin() {
  console.log(Math.min(...arguments));
}

findMin(12, 14, 4, -4, 0.2);

//task_6
/*case_1*/
function findUnique(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
let arrDubl = [3, 6, 7, 6, -3];
let arrUniq = [1, 5, -9, 3, 9];
console.log(findUnique(arrDubl));
console.log(findUnique(arrUniq));

/*case_2*/
function arrayToSet(arr) {
  return new Set(arr);
}
function isUnique(arr) {
  return arrayToSet(arr).size === arr.length;
}
let arrDubl = [3, 6, 7, 6, -3];
let arrUniq = [1, 5, -9, 3, 9];
console.log(isUnique(arrDubl));
console.log(isUnique(arrUniq));

//task_7
function lastElem(arr, x) {
  if (x != undefined) {
    return arr.slice(arr.length - x, arr.length);
  }
  return arr[arr.length - 1];
}
let arr = [3, 4, 10, -5];
console.log(lastElem(arr));
console.log(lastElem(arr, 2));
console.log(lastElem(arr, 8));

//task_8
function getUpperCase(inputString) {
  let arr = inputString.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join(" ");
}
console.log(getUpperCase("i love java script"));
