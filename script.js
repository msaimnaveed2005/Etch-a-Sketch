const container = document.querySelector("#container");
const button = document.querySelector("#resizeBtn");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // initialize tracking
    square.dataset.interactions = 0;

    square.addEventListener("mouseover", function () {
      let interactions = Number(square.dataset.interactions);

      // set random color only ONCE
      if (!square.dataset.color) {
        square.dataset.color = getRandomColor();
        square.style.backgroundColor = square.dataset.color;
      }

      // increase darkness step by step
      if (interactions < 10) {
        interactions++;
        square.dataset.interactions = interactions;

        // apply opacity gradually
        square.style.opacity = interactions / 10;
      }
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", function () {
  let userInput = prompt("Enter number of squares per side, max 100:");

  userInput = Number(userInput);

  if (userInput > 0 && userInput <= 100) {
    createGrid(userInput);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);