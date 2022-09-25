// bad

function calculateTaxiFees(base: number, date: "night" | "day"): number {
  if (date === "night") {
    return base + 0.5;
  } else return base + 0.2;
}

// good

function calculateTaxiFees(base: number, hour: "night" | "day"): number {
  if (hour === "night") return calculateNightFees(base);

  return calculateDayFees(base);
}

function calculateNightFees(base: number) {
  return base + 0.5;
}

function calculateDayFees(base: number) {
  return base + 0.2;
}
