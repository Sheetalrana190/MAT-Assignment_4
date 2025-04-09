import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should throw an error for painting speed of 0', () => {
    expect(() => estimatePaintingTime(100, 0)).toThrow("Painting speed cannot be zero");
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should throw an error for negative area', () => {
    expect(() => estimatePaintingTime(-100, 10)).toThrow("Area and painting speed must be positive");
  });

  test('should throw an error for negative painting speed', () => {
    expect(() => estimatePaintingTime(100, -10)).toThrow("Area and painting speed must be positive");
  });

 
});