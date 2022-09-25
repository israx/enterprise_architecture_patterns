// Bad
const date: "night" | "day" = "night";

function calculateTaxiFees(base: number): number {
  if (date === "night") {
    return base + 0.5;
  } else return base + 0.2;
}

// Good

function calculateTaxiFees(base: number, date: "night" | "day"): number {
  if (date === "night") {
    return base + 0.5;
  } else return base + 0.2;
}
