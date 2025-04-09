export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  if (area < 0 || paintingSpeed < 0) {
    throw new Error("Area and painting speed must be positive");
  }
  if (paintingSpeed === 0) {
    throw new Error("Painting speed cannot be zero");
  }
  return area / paintingSpeed;
}