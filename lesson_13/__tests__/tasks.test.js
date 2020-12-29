const tasksFunc = require("./tasks");
/******************task_1******************/

test("Add 0.1 by 0.2 is 0.3", () => {
  expect(tasksFunc.sum(0.1, 0.2)).toBe(0.3);
});

/**********************task_2*******************/

test("Tests for userList are passed", () => {
  expect(tasksFunc.userList).toContain("admin");
  expect(tasksFunc.userList[0]).toEqual("Nick");
  expect(tasksFunc.userList[tasksFunc.userList.length - 1]).toEqual("new_user_2");
  expect(tasksFunc.userList.length).toEqual(5);
  expect(typeof tasksFunc.userList[2]).toEqual("string");
  expect(tasksFunc.userList[8]).toBeUndefined();
});
