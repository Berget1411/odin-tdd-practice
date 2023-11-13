import caesarCipher from "./caesarCipher";

test('"abc" should be "nop', () => {
  expect(caesarCipher("abc")).toBe("nop");
});

test('"HeLlO" should be "UrYyB', () => {
  expect(caesarCipher("HeLlO")).toBe("UrYyB");
});

test('"wyz" should be "jlm', () => {
  expect(caesarCipher("wyz")).toBe("jlm");
});

test('"a.b.c" should be "n.o.p', () => {
  expect(caesarCipher("wyz")).toBe("jlm");
});

test('"a&&.b&&.c&&" should be "n&&.o&&.p&&', () => {
  expect(caesarCipher("a&&.b&&.c&&")).toBe("n&&.o&&.p&&");
});
