export default function paintRequiredForMultipleCoats(area: number, coveragePerLiter: number, coats: number): number {
  if (area <= 0 || coveragePerLiter <= 0 || coats <= 0) {
    throw new Error("Area, coverage per liter, and coats must be positive and non-zero");
  }
  return (area / coveragePerLiter) * coats;
}