export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  
  if (paintCost == 0 || laborCost == 0) {
    throw new Error("Costs should not be zero");
  }
  if (paintCost < 0 || laborCost < 0) {
    throw new Error("Costs should be positive");
  }
  return paintCost + laborCost;
}