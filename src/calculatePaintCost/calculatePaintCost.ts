export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  // Check if values are numbers
  if (typeof paintRequired !== "number" || isNaN(paintRequired)) {
    throw new Error("Paint required must be a valid number.");
  }
  if (typeof costPerLiter !== "number" || isNaN(costPerLiter)) {
    throw new Error("Cost per liter must be a valid number.");
  }

  // Ensure values are greater than zero
  if (paintRequired < 0) {
    throw new Error("Paint required should be greater than zero.");
  }
  if (costPerLiter <= 0) {
    throw new Error("Cost per liter should be greater than zero.");
  }

  // Calculate the total cost
  return paintRequired * costPerLiter;
}
