import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should throw an error when paint cost is 0', () => {
    expect(() => calculateTotalCost(0, 50)).toThrow("Costs should not be zero");
  });

  test('should throw an error when labor cost is 0', () => {
    expect(() => calculateTotalCost(100, 0)).toThrow("Costs should not be zero");
  });

  test('should throw an error for negative paint cost', () => {
    expect(() => calculateTotalCost(-100, 50)).toThrow("Costs should be positive");
  });

  test('should throw an error for negative labor cost', () => {
    expect(() => calculateTotalCost(100, -50)).toThrow("Costs should be positive");
  });

  test('should handle large numbers correctly', () => {
    expect(calculateTotalCost(1000000, 500000)).toBe(1500000);
  });

  test('should handle decimal values correctly', () => {
    expect(calculateTotalCost(100.5, 50.25)).toBe(150.75);
  });
});