import endsWith from '../src/endsWith.js';

describe('endsWith function', () => {
  test('returns true when string ends with the suffix', () => {
    expect(endsWith('hello', 'lo')).toBe(true);
    expect(endsWith('world', 'd')).toBe(true);
  });

  test('returns false when string does not end with the suffix', () => {
    expect(endsWith('hello', 'he')).toBe(false);
    expect(endsWith('world', 'a')).toBe(false);
  });

  test('handles empty strings and suffixes', () => {
    expect(endsWith('', '')).toBe(true); // Both empty
    expect(endsWith('hello', '')).toBe(true); // Empty suffix
    expect(endsWith('', 'lo')).toBe(false); // Empty string
  });

  test('is case sensitive', () => {
    expect(endsWith('hello', 'LO')).toBe(false); // Case mismatch
    expect(endsWith('hello', 'lo')).toBe(true); // Correct case
  });

  test('returns false for non-string inputs', () => {
    expect(endsWith(12345, '5')).toBe(false); // Input is a number
    expect(endsWith('hello', 5)).toBe(false); // Suffix is a number
    expect(endsWith(null, 'lo')).toBe(false); // Input is null
    expect(endsWith('hello', null)).toBe(false); // Suffix is null
  });
});
