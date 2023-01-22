const containerEl = document.querySelector(".container");

// create 30 color-container divs and appended to container div
for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

// grab all the created color-container divs
const colorContainerEls = document.querySelectorAll(".color-container");

// calling generateColors() function
generateColors();

// grabbing all color containers and adding new background color and textContent from randomColor function
function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.textContent = "#" + newColorCode;
  });
}

// generate hex code values by randomly selecting 1 char from a string using substring and random number. ever char is being appended to colorCode variable
function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
