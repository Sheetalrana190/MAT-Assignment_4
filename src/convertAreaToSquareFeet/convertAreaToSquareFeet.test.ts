import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should convert area correctly for positive values', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39, 2);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78, 2);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585, 2);
  });

  test('should return 0 for area of 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  test('should throw an error for negative values', () => {
    expect(() => convertAreaToSquareFeet(-100)).toThrow("Area cannot be negative");
    expect(() => convertAreaToSquareFeet(-200)).toThrow("Area cannot be negative");
    expect(() => convertAreaToSquareFeet(-150)).toThrow("Area cannot be negative");
  });

  test('should handle decimal values correctly', () => {
    
    expect(convertAreaToSquareFeet(200.75)).toBeCloseTo(2158.56925, 3);
  });
});