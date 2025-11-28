import * as view from './view.js';
import * as model from './model.js';

export let isPaused = false;
export let generation = 0;
let timerId = null;

function startController() {
    console.log("Controller started");
    
    window.model = model;
    window.view = view;
    
    model.resetGrid();
    view.setupGridUI(model.grid_rows, model.grid_cols);
    //view.displayGrid(model);

    tick();
}

function tick() {
    if (!isPaused) {
        model.updateGrid();
        generation++;
        view.displayGrid(model);
        timerId = setTimeout(tick, 500);
    }
}

function resetGame() {
    generation = 0;
    isPaused = false;
    model.resetGrid();
    view.displayGrid(model);
    clearTimeout(timerId);
    tick();
}

document.getElementById('pauseButton').addEventListener('click', () => {
    isPaused = !isPaused;
    if (!isPaused) {
        tick();
    } else {
        clearTimeout(timerId);
        view.displayGrid(model);
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    resetGame();
});

document.getElementById('resizeButton').addEventListener('click', () => {
    const rows = parseInt(document.getElementById('rowsInput').value);
    const cols = parseInt(document.getElementById('colsInput').value);
    model.initGrid(rows, cols);
    view.setupGridUI(rows, cols);
    resetGame();
});

// if a cell is clicked, add 1 to its value (toggle between empty and player)
document.getElementById('grid').addEventListener('click', (event) => {
    if (event.target.classList.contains('cell')) {
        const cells = Array.from(document.querySelectorAll('#grid .cell'));
        const index = cells.indexOf(event.target);
        const row = Math.floor(index / model.grid_cols);
        const col = index % model.grid_cols;
        let currentValue = model.readFromCell(row, col);
        let newValue = (currentValue + 1) % 2;
        model.writeToCell(row, col, newValue);
        view.displayGrid(model);
    }
});

startController();