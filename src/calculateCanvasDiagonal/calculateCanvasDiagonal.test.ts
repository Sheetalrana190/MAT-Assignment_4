import { calculateCanvasDiagonal } from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  
  test("should calculate diagonal correctly", () => {
    const length = 3;
    const width = 4;
    const diagonal = calculateCanvasDiagonal(length, width);
    
    expect(diagonal).toBeCloseTo(5); // Pythagorean theorem: sqrt(3^2 + 4^2) = 5
  });

  test("should throw an error when length is negative", () => {
    expect(() => calculateCanvasDiagonal(-3, 4)).toThrow("Length should be positive");
  });

  test("should throw an error when width is negative", () => {
    expect(() => calculateCanvasDiagonal(3, -4)).toThrow("width should be positive");
  });

  test("should throw an error when length is zero", () => {
    expect(() => calculateCanvasDiagonal(0, 4)).toThrow("Length should not be zero");
  });

  test("should throw an error when width is zero", () => {
    expect(() => calculateCanvasDiagonal(3, 0)).toThrow("width should not be zero");
  });

  
  test("should throw an error when length is a non-numeric string", () => {
    expect(() => calculateCanvasDiagonal(NaN, 3)).toThrow("Dimensions cannot be NaN");

  });
  test("should throw an error when width is a non-numeric string", () => {
    expect(() => calculateCanvasDiagonal(NaN, 3)).toThrow("Dimensions cannot be NaN");
  });
  
  test.todo("should throw an error when length is empty");

  test.todo("should throw an error when width is empty");


});
