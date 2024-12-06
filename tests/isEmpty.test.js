import isEmpty from '../src/isEmpty.js';

describe('isEmpty function', () => {
  test('returns true for empty strings, arrays, and objects', () => {
    expect(isEmpty('')).toBe(true); // Empty string
    expect(isEmpty([])).toBe(true); // Empty array
    expect(isEmpty({})).toBe(true); // Empty object
  });

  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns false for non-empty strings, arrays, and objects', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  test('handles numbers and booleans', () => {
    expect(isEmpty(0)).toBe(true); // `0` is "empty"
    expect(isEmpty(true)).toBe(true); // `true` is "empty"
    expect(isEmpty(false)).toBe(true); // `false` is "empty"
  });

  test('handles special types like functions and symbols', () => {
    expect(isEmpty(() => {})).toBe(true); // Functions are "empty"
    expect(isEmpty(Symbol('test'))).toBe(true); // Symbols are "empty"
  });
});
