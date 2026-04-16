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

    square.dataset.interactions = 0;

    square.addEventListener("mouseover", function () {
      let interactions = Number(square.dataset.interactions);

      if (!square.dataset.r) {
        square.dataset.r = Math.floor(Math.random() * 256);
        square.dataset.g = Math.floor(Math.random() * 256);
        square.dataset.b = Math.floor(Math.random() * 256);
      }

      if (interactions < 10) {
        interactions++;
        square.dataset.interactions = interactions;
      }

      const alpha = interactions / 10;
      const r = square.dataset.r;
      const g = square.dataset.g;
      const b = square.dataset.b;

      square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
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

createGrid(16);