//task_1
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = !!x + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = !!(x + y);
console.log(res3);
console.log(typeof res3);

let res4 = parseInt(res3);
console.log(res4);
console.log(typeof res4);

//task_2
let res5 = prompt("Enter a number:");
if (res5 > 0 && res5 % 2 == 0) {
  console.log(res5 + " is an even and positive number");
} else if (res5 % 7 == 0) {
  console.log(res5 + " is a multiple of 7");
} else {
  console.log(res5 + " is incorrect value");
}

//task_3
let arr = [];
arr.push(15);
arr.push("The best day");
arr.push(true);
arr.push(null);
console.log(arr.length);
arr.push(prompt("Enter a value"));
console.log(arr[4]);
arr.shift();
console.log(arr);

//task_4
let cities = ["Rome", "Lviv", "Warsaw"];
let res6 = cities.join("*");
console.log(res6);

//task_5
let isAdult = prompt("How old are you?");
if (isAdult > 18) {
  console.log("You reached the age of majority");
} else if (isAdult <= 18 && isAdult >= 10) {
  console.log("You are a teenager");
} else if (isAdult < 10 && isAdult > 0) {
  console.log("You are too young");
} else {
  console.log("You entered incorrect value");
}

//task_6
let a = parseFloat(prompt("Enter the first cathetus of triangle: "));
let b = parseFloat(prompt("Enter the second cathetus of triangle: "));
let c = parseFloat(prompt("Enter the hypotenuse of triangle: "));
let numType = "number";
let a2 = a ** 2;
let b2 = b ** 2;
let c2 = c ** 2;
let sumOfCathetus = a2 + b2;
let p = (a + b + c) / 2;
let S = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2);
if (isNaN(S) || a <= 0 || b <= 0 || c <= 0) {
  console.log("Incorrect data");
} else if (Number.isInteger(S)) {
  console.log("Square of triangle: " + S);
} else {
  console.log("Square of triangle: " + S.toFixed(3));
}

if (!isNaN(a2) && !isNaN(b2) && !isNaN(c2) && a > 0 && b > 0 && c > 0) {
  if (c2 == sumOfCathetus) {
    console.log("Triangle is rectangular");
  } else if (c2 != sumOfCathetus) {
    console.log("Triangle isn't rectangular");
  }
}

//task_7
/*if...else...if statement*/
let today = new Date();
let time = parseInt(today.getHours());
if (time >= 23 && time < 5) {
  console.log("Good night!");
} else if (time >= 5 && time < 11) {
  console.log("Good morning!");
} else if (time >= 11 && time < 17) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
/*switch statement*/
switch (true) {
  case time >= 23 && time < 5:
    console.log("Good night!");
    break;
  case time >= 5 && time < 11:
    console.log("Good morning!");
    break;
  case time >= 11 && time < 17:
    console.log("Good afternoon!");
    break;
  default:
    console.log("Good evening!");
}
