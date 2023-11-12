import reverseString from "./reverseString";

test('"reet" should become "teer"', () => {
  expect(reverseString("reet")).toBe("teer");
});

test('"abc" should become "cba"', () => {
  expect(reverseString("abc")).toBe("cba");
});

test('"#¤%!245" should be "542!%¤#"', () => {
  expect(reverseString("#¤%!245")).toBe("542!%¤#");
});
