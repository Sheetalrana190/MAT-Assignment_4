import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should throw an error for area of 0', () => {
    expect(() => paintRequiredForMultipleCoats(0, 10, 2)).toThrow("Area, coverage per liter, and coats must be positive and non-zero");
  });

  test('should throw an error for coverage per liter of 0', () => {
    expect(() => paintRequiredForMultipleCoats(100, 0, 2)).toThrow("Area, coverage per liter, and coats must be positive and non-zero");
  });

  test('should throw an error for coats of 0', () => {
    expect(() => paintRequiredForMultipleCoats(100, 10, 0)).toThrow("Area, coverage per liter, and coats must be positive and non-zero");
  });

  test('should throw an error for negative area', () => {
    expect(() => paintRequiredForMultipleCoats(-100, 10, 2)).toThrow("Area, coverage per liter, and coats must be positive and non-zero");
  });

  test('should throw an error for negative coverage per liter', () => {
    expect(() => paintRequiredForMultipleCoats(100, -10, 2)).toThrow("Area, coverage per liter, and coats must be positive and non-zero");
  });

  test('should throw an error for negative coats', () => {
    expect(() => paintRequiredForMultipleCoats(100, 10, -2)).toThrow("Area, coverage per liter, and coats must be positive and non-zero");
  });
});