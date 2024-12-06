import ceil from '../src/ceil.js';

describe('ceil function', () => {
  test('rounds numbers to the nearest integer', () => {
    expect(ceil(123.456)).toBe(124); // Rounds up
    expect(ceil(0.1)).toBe(1); // Rounds up
    expect(ceil(-2.345)).toBe(-2); // Rounds up negative numbers
  });

  test('does not alter integers', () => {
    expect(ceil(123)).toBe(123); // Integer remains unchanged
    expect(ceil(0)).toBe(0); // Zero remains unchanged
    expect(ceil(-5)).toBe(-5); // Negative integer remains unchanged
  });

  test('handles non-numeric inputs gracefully', () => {
    expect(() => ceil('abc')).not.toThrow(); // Should not throw
    expect(ceil('abc')).toBeNaN(); // Returns NaN for invalid inputs
    expect(ceil(null)).toBe(0); // Null is treated as 0
    expect(ceil(undefined)).toBeNaN(); // Undefined returns NaN
  });
});
