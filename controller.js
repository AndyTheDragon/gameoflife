import * as view from './view.js';
import * as model from './model.js';

let isPaused = false;
let generation = 0;

function startController() {
    console.log("Controller started");

    window.model = model;
    window.view = view;

    model.resetGrid();
    view.displayGrid(model);

    tick();
}

function tick() {
    if (!isPaused) {
        model.updateGrid();
        generation++;
        view.displayGrid(model);
        setTimeout(tick, 500);
    }
}

function resetGame() {
    generation = 0;
    isPaused = false;
    model.resetGrid();
    view.displayGrid(model);
    tick();
}

document.getElementById('pauseButton').addEventListener('click', () => {
    isPaused = !isPaused;
    if (!isPaused) {
        tick();
    } else {
        view.displayGrid(model);
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    resetGame();
});

startController();