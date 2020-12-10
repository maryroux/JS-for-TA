/*************task_5********************/
let reg = /(\w+)\s(\w+)/;
let str = 'Java Script';
let newStr = str.replace(reg, '$2, $1');
console.log(newStr);

/******************task_6******************/
function checkEmail(value) {
  let result = /^[a-zA-Z0-9]+[-\w\s]+@[-\w\s]+(\.[-\w\s]+)*$/.test(value);
  if ((value.match(/-/g) || []).length > 1 || result == false) {
    console.log("Email is not correct!");
  } else {
    console.log("Email is correct!");
  }
}
checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");

/***************task_7*********************/
function checkLogin(value) {
    let result = /^([a-zA-Z]+[\d]*[.]{0,1}[\d]+){2,10}/.test(value);
    let digit = value.match(/[\d]*[.]{0,1}[\d]+/g);
    console.log(result);
    console.log(digit);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
