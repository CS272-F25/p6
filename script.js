// rounds a number to the nearest 1/8
function roundToNearestEighth(x) {
  return Math.round(x * 8) / 8;
}

// main hat size calculator
function calculateHatSize() {
  // grab the input box + result paragraph
  const input = document.getElementById("headSize");
  const resultEl = document.getElementById("hatResult");

  // turn the value into a number
  const cm = parseFloat(input.value);

  // check if it's actually a number
  if (isNaN(cm) || cm <= 0) {
    resultEl.textContent = "Please enter a valid head size in cm.";
    return;
  }

  // convert cm to inches
  const inches = cm / 2.54;

  // convert inches to hat size (divide by pi)
  const rawSize = inches / Math.PI;
  const roundedSize = roundToNearestEighth(rawSize);

  // show result
  resultEl.textContent = `Based on ${cm} cm, your US hat size is about ${roundedSize.toFixed(3)}.`;

  // save hat size so it stays next time
  localStorage.setItem("hatSizeUS", roundedSize.toFixed(3));
}

// when the page loads, check if user already has a saved size
window.addEventListener("DOMContentLoaded", () => {
  const savedSize = localStorage.getItem("hatSizeUS");
  
  // On index: still show welcome message in hatResult if it exists
  const resultEl = document.getElementById("hatResult");
  if (savedSize && resultEl) {
    resultEl.textContent = `Welcome back! Your saved hat size is ${savedSize} (US).`;
  }

  // On other pages: show it in the savedSizeMessage area if it exists
  const savedSizeMessage = document.getElementById("savedSizeMessage");
  if (savedSize && savedSizeMessage) {
    savedSizeMessage.textContent = `Your saved hat size is ${savedSize} (US).`;
    savedSizeMessage.classList.remove("d-none");
  }
});

