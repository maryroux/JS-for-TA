/****************task_1********************/
function upperCase(inputStr) {
  let result = /^[A-Z]/.test(inputStr);
  if (result == true) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}
let firstStr = "regexp";
let secondStr = "Regexp";
upperCase(firstStr);
upperCase(secondStr);

/****************task_2********************/
function checkEmail(value) {
    let result = /@+/.test(value);
    console.log(result);
}
checkEmail("user1.com");
checkEmail("user2@gmail.com");

