/*******************task_1**********************/
function getPromise(message, delay) {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
  return promise;
}

getPromise("test promise", 2000).then((data) => console.log(data));

/*******************task_2************************/
function calcArrProduct(arr) {
  let multiply = 1;
  let promise = new Promise((resolve, reject) => {
    arr.forEach((element) => {
      if (typeof element != "number") {
        reject("Error! Incorrect array!");
      }
      multiply *= element;
    });
    resolve(multiply);
  });
  return promise;
}

calcArrProduct([3, 4, 5]).then((result) => console.log(result));
calcArrProduct([5, "user2", 7, 12]).catch((result) => console.log(result));

/******************task_3**********************/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));
const showNumbers = () =>
  new Promise((resolve) => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let promise = Promise.resolve(arr[0]);
    for (let i = 1; i <= arr.length; i++) {
      promise = promise.then((val) => {
        console.log(val);
        return delay(arr[i], getRandomIntInclusive(0, 3000));
      });
    }
    resolve(promise);
  });
showNumbers();

/***********************task_4********************/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));
async function showNumbers() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr.length; i++) {
      await delay(i, getRandomIntInclusive(0, 3000));
      console.log(arr[i]);
  }
}

showNumbers();
