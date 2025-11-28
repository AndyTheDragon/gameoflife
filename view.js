import * as controller from './controller.js';

export function displayGrid(model) {
    //console.log("Displaying grid");
    const cells = document.querySelectorAll('#grid .cell');
    for (let row = 0; row < model.grid_rows; row++) {
        for (let col = 0; col < model.grid_cols; col++) {

            const value = model.readFromCell(row, col);
            const index = row * model.grid_cols + col;
            switch (value) {
                case 1:
                    cells[index].classList.add('player');
                    break;
                default:
                    if (!cells[index]) console.log("Clearing cell at index", index);
                    cells[index].classList.remove('player');
            }
        }
    }

    document.getElementById('generationCounter').textContent = controller.generation;
}

export function setupGridUI(rows, cols) {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = ''; 
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            gridContainer.appendChild(cellDiv);
        }
    }
}