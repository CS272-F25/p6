function roundToNearestEighth(x) {
  return Math.round(x * 8) / 8;
}
function calculateHatSizeFromCm() {
  // 1. Get the input element
  const input = document.getElementById("headSize");

  // 2. Read the value (comes in as a string)
  const cm = parseFloat(input.value);

  // 3. Validate the number
  const resultEl = document.getElementById("hatResult");
  if (isNaN(cm) || cm <= 0) {
    resultEl.textContent = "Please enter a valid head size in cm.";
    return;
  }

  // 4. Convert cm → inches
  const inches = cm / 2.54;

  // 5. Convert inches → hat size (US) and round to nearest 1/8
  const rawSize = inches / Math.PI;
  const roundedSize = Math.round(rawSize * 8) / 8;

  // 6. Show result on the page
  resultEl.textContent = `Estimated hat size: ${roundedSize.toFixed(3)} (US)`;
}

// Example:
console.log(calculateHatSizeFromCm(56)); // ~7.0