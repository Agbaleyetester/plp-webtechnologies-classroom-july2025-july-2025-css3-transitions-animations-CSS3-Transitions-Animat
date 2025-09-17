/*******************************
 * Part 2: JavaScript Functions
 *******************************/

// Global variable example
let multiplier = 2;

// Function with parameter & return value
function doubleNumber(num) {
  return num * multiplier;  // uses global variable
}

// Function to handle click event and show result
function handleCalculation() {
  let value = 5; // local variable
  let result = doubleNumber(value);
  document.getElementById("calc-result").textContent = "Result: " + result;
}

// Attach event listener
document.getElementById("calc-btn").addEventListener("click", handleCalculation);


/*****************************************
 * Part 3: JS Triggering CSS Animations
 *****************************************/

function triggerAnimation() {
  const box = document.getElementById("box-to-animate");
  box.classList.remove("animate");  // reset animation
  void box.offsetWidth;              // force reflow
  box.classList.add("animate");      // start animation
}

document.getElementById("animate-btn").addEventListener("click", triggerAnimation);
