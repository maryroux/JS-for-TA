const calcCircle = require('./calcCircle');
//const getCircleArea = require('./calcCircle');

test('Circle length is equal to 138.2', () => {
    expect(Number(calcCircle.getCircleLength(22).toFixed(1))).toBe(138.2);
});
test('Circle area is equal to 254.47', () => {
    expect(Number(calcCircle.getCircleArea(9).toFixed(2))).toBe(254.47);
});
test('Existing of func getCircleLength', () => {
    expect(calcCircle.getCircleLength()).toBe(NaN);
});
test('Existing of func getCircleArea', () => {
    expect(calcCircle.getCircleArea()).toBe(NaN);
});