import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should throw an error when cost per liter is 0', () => {
    expect(() => calculatePaintCost(10, 0)).toThrow("Cost per liter should be greater than zero.");
  });

  test('should throw an error when paint required is negative', () => {
    expect(() => calculatePaintCost(-10, 5)).toThrow("Paint required should be greater than zero.");
  });

  test('should throw an error when cost per liter is negative', () => {
    expect(() => calculatePaintCost(10, -5)).toThrow("Cost per liter should be greater than zero.");
  });

  test('should throw an error when both values are negative', () => {
    expect(() => calculatePaintCost(-10, -5)).toThrow("Paint required should be greater than zero.");
  });

  test('should throw an error when paint required is NaN', () => {
    expect(() => calculatePaintCost(NaN, 5)).toThrow("Paint required must be a valid number.");
  });

  test('should throw an error when cost per liter is NaN', () => {
    expect(() => calculatePaintCost(10, NaN)).toThrow("Cost per liter must be a valid number.");
  });

  test('should throw an error when paint required is a non-numeric string', () => {
    expect(() => calculatePaintCost("abc" as unknown as number, 5)).toThrow("Paint required must be a valid number.");
  });

  test('should throw an error when cost per liter is a non-numeric string', () => {
    expect(() => calculatePaintCost(10, "xyz" as unknown as number)).toThrow("Cost per liter must be a valid number.");
  });

});
