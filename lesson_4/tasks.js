//task_1
function testThrow(a) {
  try {
    throw new Error(a);
  } catch (exeption) {
    console.log(exeption.message);
  }
}
testThrow(10);
testThrow(true);
testThrow(new Error("An error happened"));

//task_2
function calcRectangleArea(width, height) {
  try {
    if (typeof width != "number" || typeof height != "number") {
      throw new TypeError("Incorrect type of input data");
    }
    return width * height;
  } catch (error) {
    if (error.name == "TypeError") {
      console.log(error.name + ": " + error.message);
    } else {
    throw error;
    }
  }
}
try {
  console.log(calcRectangleArea(5, 10));
  console.log(calcRectangleArea(5, "ten"));
} catch (error) {
  console.log("Error handling of any type");
  console.log(error.stack);
}

//task_3
function checkAge() {
  let age = prompt("Enter your age:", "");
  try {
    if (age == "") {
      throw new SyntaxError("The field is empty! Please enter your age");
    } else if (isNaN(Number(age))) {
      throw new TypeError("The field consists of non-number values!");
    } else if (0 < age && age < 14) {
      throw new Error("You are too young");
    }
    alert("You have a permission");
  } catch (error) {
    if (error.name == "SyntaxError" ||
        error.name == "TypeError" ||
        error.name == "Error") {
      alert(error.name + ": " + error.message);
    } else {
      throw error;
    }
  }
}
try {
  checkAge();
} catch (error) {
  console.log("Error handling of any type");
  console.log(error.message);
}

//task_4
class MonthException {

    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}
function showMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    if (typeof month != "number") {
        throw new TypeError("Incorrect input type!");
    } else if (month > 12 || month <= 0) {
        throw new MonthException("Incorrect month number!");
    } else {
        return monthNames[month-1]; 
    }
}
try {
    console.log(showMonthName(1));
} catch(error) {
        console.log(error.name + ": " + error.message);
}

//task_5
