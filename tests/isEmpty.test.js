import isEmpty from '../src/isEmpty.js';

describe('isEmpty function', () => {
  test('returns true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('returns false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('returns true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('returns false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('returns true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('returns false for non-empty objects', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('handles numbers and booleans', () => {
    expect(isEmpty(0)).toBe(false); // 0 is not "empty"
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  test('handles special types like functions and symbols', () => {
    expect(isEmpty(() => {})).toBe(false); // Functions are not "empty"
    expect(isEmpty(Symbol('test'))).toBe(false); // Symbols are not "empty"
  });
});
