import calculator from "./calculator";

test("1 + 2 should be 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("33 + 66 should be 99", () => {
  expect(calculator.add(33, 66)).toBe(99);
});

test("-3 + -3 should be 99", () => {
  expect(calculator.add(-3, -3)).toBe(-6);
});

test("& + 3 should be 'Arguments contain a non-number'", () => {
  expect(calculator.add("&", 3)).toBe("Arguments contain a non-number");
});

test("11 - 7 should be 4", () => {
  expect(calculator.subtract(11, 7)).toBe(4);
});

test("3 - 10 should be -7", () => {
  expect(calculator.subtract(3, 10)).toBe(-7);
});

test("& - 3 should be 'Arguments contain a non-number'", () => {
  expect(calculator.subtract("&", 3)).toBe("Arguments contain a non-number");
});

test("10 / 5 should be 2", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("10 / 3 should be 2", () => {
  expect(calculator.divide(10, 3)).toBeCloseTo(3.3333);
});

test("5 / 4 should be 1.25", () => {
  expect(calculator.divide(5, 4)).toBe(1.25);
});

test("'5' / 2 should be 'Arguments contain a non-number'", () => {
  expect(calculator.add("5", 2)).toBe("Arguments contain a non-number");
});

test("0.1 * 5 should be 0.5", () => {
  expect(calculator.multiply(0.1, 5)).toBe(0.5);
});

test("3.3 * 10 should be 33", () => {
  expect(calculator.multiply(3.3, 10)).toBe(33);
});

test("'5' * 3 should be 'Arguments contain a non-number'", () => {
  expect(calculator.multiply("5", 3)).toBe("Arguments contain a non-number");
});
