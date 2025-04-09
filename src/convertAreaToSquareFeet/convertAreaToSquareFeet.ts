export default function convertAreaToSquareFeet(area: number): number {
  if (area < 0) {
    throw new Error("Area cannot be negative");
  }
  const conversionFactor = 10.7639;
  return area * conversionFactor;
}