import analyzeArray from "./analyzeArray";

test('"[1,8,3,4,2,6]" should give {average:4, min: 1, max: 8, length: 6}', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('"[5,10,15,20,25,30,35]" should give {average:4, min: 1, max: 8, length: 6}', () => {
  expect(analyzeArray([5, 10, 15, 20, 25, 30, 35])).toEqual({
    average: 20,
    min: 5,
    max: 35,
    length: 7,
  });
});

test('"["1",8,3,4,2,6]" should give "array contains non-numbers"', () => {
  expect(analyzeArray(["1", 8, 3, 4, 2, 6])).toEqual(
    "array contains non-numbers"
  );
});
