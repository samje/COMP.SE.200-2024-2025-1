import capitalize from '../src/capitalize.js';

describe('capitalize function', () => {
  test('converts the first letter to uppercase and the rest to lowercase', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
  });

  test('returns an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('handles single character strings correctly', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  test('handles non-string inputs gracefully', () => {
    expect(capitalize(123)).toBe('123'); // Converted to string
    expect(capitalize(null)).toBe(''); // Empty string
    expect(capitalize(undefined)).toBe(''); // Empty string
  });

  test('handles strings with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello'); // Special characters remain unchanged
    expect(capitalize('123abc')).toBe('123abc'); // Numbers stay the same
  });
});
