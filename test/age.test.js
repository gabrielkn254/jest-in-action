const isOfAge = require('../age');

describe('isOfAge function', () => {

  test('returns true if age is 21 or older', () => {
    expect(isOfAge(23)).toBe(true)
  });

  test('returns true if age is 21', () => {
    expect(isOfAge(21)).toBe(true)
  });

  test('returns false if age is below 21 or is a negative number', () => {
    expect(isOfAge(16)).toBe(false)
    expect(isOfAge(-21)).toBe(false)
  });

});