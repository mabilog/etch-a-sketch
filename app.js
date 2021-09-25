const gridContainer = document.querySelector('#grid-container');
const containerSize = document.querySelector('#size-button')
const resetButton = document.querySelector('#reset-button');

// const gridSize = 16;
let gridSize = 16;

function setDefaultGrid() {
  setGridSize(16);
  setFillGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  // gridSize = size;
}

function setFillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = 'grid-element';
    gridElement.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG},${randomB})`;
}

function changeSize() {
  gridSize = prompt('Enter new grid size from 1 to 64');
  if (gridSize !== null) {
    if (gridSize < 1 || gridSize > 64 || Number.isNaN(gridSize)) {
      alert("Enter new size from 1 to 64");
      changeSize();
    } else {
      clearGrid(gridSize);

    }
  }
}

function clearGrid(size) {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach(element => {
    gridContainer.removeChild(element);
  });
  setGridSize(gridSize);
  setFillGrid(gridSize);
}

window.addEventListener('load', setDefaultGrid);
containerSize.addEventListener('click', changeSize);
resetButton.addEventListener('click', clearGrid);