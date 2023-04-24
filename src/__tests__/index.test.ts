import isDict from '../index';

describe('check isDict', () => {

  test('should be false for a function', () => {
    expect(isDict(jest.fn())).toBeFalsy();
  });
  test('should be false for a null', () => {
    expect(isDict(null)).toBeFalsy();
  });
  test('should be false for an array', () => {
    expect(isDict([])).toBeFalsy();
  });
  test('should be false for an string', () => {
    expect(isDict("")).toBeFalsy();
  });
  test('should be false for an undefined', () => {
    expect(isDict(undefined)).toBeFalsy();
  });
  test('should be false for a boolean', () => {
    expect(isDict(true)).toBeFalsy();
  });
  test('should be true for a dict', () => {
    expect(isDict({})).toBeTruthy();
  });
});
