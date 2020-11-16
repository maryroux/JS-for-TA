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
