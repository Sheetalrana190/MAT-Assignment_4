import calculateCanvasSize from "./calculateCanvasPerimeter";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize(10, 100);

    expect(result).toEqual(110);
  })
});
