function roundToNearestEighth(x) {
  return Math.round(x * 8) / 8;
}
// function calculateHatSizeFromInches(circumferenceInches) {
//   if (typeof circumferenceInches !== "number" || circumferenceInches <= 0) {
//     throw new Error("circumferenceInches must be a positive number");
//   }

//   const rawSize = circumferenceInches / Math.PI;
//   const rounded = Math.round(rawSize * 8) / 8; // nearest 1/8
//   return rounded;
// }

// // Example:
// console.log(calculateHatSizeFromInches(22)); // ~7.0
// console.log(calculateHatSizeFromInches(23)); // ~7.25

function calculateHatSizeFromCm(circumferenceCm) {
  if (typeof circumferenceCm !== "number" || circumferenceCm <= 0) {
    throw new Error("circumferenceCm must be a positive number");
  }

  const inches = circumferenceCm / 2.54;
  const rawSize = inches / Math.PI;
  const rounded = Math.round(rawSize * 8) / 8; // nearest 1/8
  return rounded;
}

// Example:
console.log(calculateHatSizeFromCm(56)); // ~7.0