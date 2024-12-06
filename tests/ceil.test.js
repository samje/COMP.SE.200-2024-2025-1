import ceil from '../src/ceil.js';

describe('ceil function', () => {
  test('rounds numbers to two decimal places', () => {
    expect(ceil(123.456)).toBe(123.46);
    expect(ceil(0.1)).toBe(0.10);
    expect(ceil(-2.345)).toBe(-2.34); // Handles negative numbers
  });

  test('does not alter numbers already at two decimal places', () => {
    expect(ceil(123.45)).toBe(123.45);
    expect(ceil(0.00)).toBe(0.00);
  });

  test('handles integers', () => {
    expect(ceil(42)).toBe(42.00);
    expect(ceil(-10)).toBe(-10.00);
  });

  test('handles special values', () => {
    expect(ceil(NaN)).toBeNaN(); // Returns NaN for invalid numbers
    expect(ceil(Infinity)).toBe(Infinity); // Infinity remains unchanged
    expect(ceil(-Infinity)).toBe(-Infinity); // Negative infinity remains unchanged
  });

  test('handles non-numeric inputs gracefully', () => {
    expect(() => ceil('abc')).toThrow(); // Should throw for invalid strings
    expect(() => ceil(null)).toThrow(); // Null should throw an error
    expect(() => ceil(undefined)).toThrow(); // Undefined should throw an error
  });
});
