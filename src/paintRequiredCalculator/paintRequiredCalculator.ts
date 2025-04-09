export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (area <= 0 || coveragePerLiter <= 0) {
    throw new Error("Area and coverage per liter must be positive and non-zero");
  }
  return area / coveragePerLiter;
}