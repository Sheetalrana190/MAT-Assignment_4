import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize(10,100);

    expect(result).toEqual(1000);
  });
  test("should throw an error when entered length of Canvas is negative", () => {
    expect(() => calculateCanvasSize(-10, 100)).toThrow("Canvas Length should be possitive");
  });
  test("should throw an error when entered width of Canvas is negative", () => {
    expect(() => calculateCanvasSize(10, -100)).toThrow("Canvas width should be possitive");
  });
  test("should throw an error when entered length of Canvas is zero", () => {
    expect(() => calculateCanvasSize(0, -100)).toThrow("Length should not be zero");
  });
  test("should throw an error when entered width of Canvas is zero", () => {
    expect(() => calculateCanvasSize(10, 0)).toThrow("width should not be zero");
  });

});