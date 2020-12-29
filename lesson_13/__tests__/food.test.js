const testFilter = require("./food");
let arr = testFilter.filterFoodPrice(testFilter.food, 12, 40);

test("Test_1: Length of SortedArray is equal to 3", () => {
  expect(arr.length).toEqual(3);
});
test("Test_2: SortedArray has some object", () => {
  let testObj_2 = { kind: "pepper", price: 27 };
  expect(arr).toContainEqual(testObj_2);
});
test("Test_3: SortedArray has 2nd, 3rd, 4th elements", () => {
  expect(arr[0]).toEqual(testFilter.food[1]);
  expect(arr[1]).toEqual(testFilter.food[2]);
  expect(arr[2]).toEqual(testFilter.food[3]);
});
test("Test_4: Price property of 1st element is greater than 12", () => {
  expect(arr[0].price).toBeGreaterThan(12);
});
test("Test_5: Price property of 3st element is less than 40", () => {
  expect(arr[arr.length - 1].price).toBeLessThan(40);
});
test("Test_6: SortedArray doesn't have extra element", () => {
  let testObj_6 = { kind: "lemon", price: 50 };
  expect(arr).not.toContainEqual(testObj_6);
});
test("Test_7: Additional tests", () => {
  expect(arr).not.toBeUndefined();
  expect(arr).not.toBeNull();
  expect(arr.length).toBeLessThan(testFilter.food.length);
});
