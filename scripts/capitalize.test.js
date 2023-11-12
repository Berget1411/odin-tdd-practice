import capitalize from './capitalize';

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

test('"Test" should become "Test"', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('"TEST" should become "TEST"', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('"multiple words test" should become "Multiple words test"', () => {
  expect(capitalize('multiple words test')).toBe('Multiple words test');
});

test('"1234" should become "No valid characters"', () => {
  expect(capitalize('1234')).toBe('no valid characters');
});

test('1234 should become "No valid characters"', () => {
  expect(capitalize(1234)).toBe('no valid characters');
});

test('"**&" should become "No valid characters"', () => {
  expect(capitalize('**&')).toBe('no valid characters');
});

test('"&%ab€€" should become "&%Ab€€"', () => {
  expect(capitalize('&%ab€€')).toBe('&%Ab€€');
});

test('"&%Ab€€" should become "&%Ab€€"', () => {
  expect(capitalize('&%Ab€€')).toBe('&%Ab€€');
});
