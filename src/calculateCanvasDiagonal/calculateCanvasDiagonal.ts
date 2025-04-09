export function calculateCanvasDiagonal(length: number, width: number): number {
  // Validate length
  if (length < 0) {
    throw new Error("Length should be positive");
  }
  if (length === 0) {
    throw new Error("Length should not be zero");
  }

  // Validate width
  if (width < 0) {
    throw new Error("Width should be positive");
  }
  if (width === 0) {
    throw new Error("Width should not be zero");
  }
 // Check for NaN values
 if (isNaN(width) || isNaN(length)) {
  throw new Error("Dimensions cannot be NaN");
}
return Math.sqrt(length * length + width * width);

}
