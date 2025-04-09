import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  test("should throw an error for zero area", () => {
    expect(() => paintRequiredCalculator(0, 10)).toThrow("Area and coverage per liter must be positive and non-zero");
  });

  test("should throw an error for zero coverage per liter", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow("Area and coverage per liter must be positive and non-zero");
  });

  test("should throw an error for negative area", () => {
    expect(() => paintRequiredCalculator(-50, 10)).toThrow("Area and coverage per liter must be positive and non-zero");
  });

  test("should throw an error for negative coverage per liter", () => {
    expect(() => paintRequiredCalculator(50, -10)).toThrow("Area and coverage per liter must be positive and non-zero");
  });

  
});