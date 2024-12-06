import toNumber from '../src/toNumber.js';

describe('toNumber function', () => {
  test('returns numbers as is', () => {
    expect(toNumber(42)).toBe(42);
    expect(toNumber(-3.14)).toBe(-3.14);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('parses valid numeric strings', () => {
    expect(toNumber('42')).toBe(42);
    expect(toNumber('  -3.14  ')).toBe(-3.14); // Handles whitespace
    expect(toNumber('Infinity')).toBe(Infinity);
  });

  test('returns NaN for invalid numeric strings', () => {
    expect(toNumber('abc')).toBeNaN();
    expect(toNumber('123abc')).toBeNaN();
    expect(toNumber('0xGHI')).toBeNaN(); // Invalid hex
  });

  test('handles binary, octal, and hex strings', () => {
    expect(toNumber('0b1010')).toBe(10); // Binary
    expect(toNumber('0o12')).toBe(10);   // Octal
    expect(toNumber('0x1A')).toBe(26);   // Hexadecimal
  });

  test('handles symbols', () => {
    const sym = Symbol('test');
    expect(toNumber(sym)).toBeNaN();
  });

  test('processes objects with valueOf method', () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).toBe(42);
  });

  test('processes objects without valueOf method', () => {
    const obj = { toString: () => '123' };
    expect(toNumber(obj)).toBe(123);
  });

  test('handles null and undefined', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
  });

  test('handles non-numeric values gracefully', () => {
    expect(toNumber(true)).toBe(1);  // Boolean true
    expect(toNumber(false)).toBe(0); // Boolean false
    expect(toNumber([])).toBe(0);    // Empty array
    expect(toNumber([42])).toBe(42); // Array with one number
    expect(toNumber([1, 2])).toBeNaN(); // Array with multiple numbers
  });

  test('handles edge cases', () => {
    expect(toNumber(NaN)).toBeNaN();
    expect(toNumber('NaN')).toBeNaN();
    expect(toNumber({})).toBeNaN(); // Plain object
  });
});
