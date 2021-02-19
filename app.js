const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('.reset-button');

function setDefaultGrid() {
  setGridSize(16);
  setFillGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
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
  let newSize = prompt('Enter new grid size from 1 to 64');
  if (newSize !== null) {
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("Enter new size from 1 to 64");
      changeSize();
    } else {
      clearGrid();
      setGridSize(newSize);
      setFillGrid(newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach(element => {
    gridContainer.removeChild(element);
  });
}

window.addEventListener('load', setDefaultGrid);
window.addEventListener('click', changeSize);