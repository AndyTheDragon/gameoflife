import * as controller from './controller.js';

export function displayGrid(model) {
    //console.log("Displaying grid");
    const cells = document.querySelectorAll('#grid .cell');
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {

            const value = model.readFromCell(row, col);
            const index = row * 10 + col;

            switch (value) {
                case 1:
                    cells[index].classList.add('player');
                    cells[index].classList.remove('goal');
                    break;
                case 2:
                    cells[index].classList.add('goal');
                    cells[index].classList.remove('player');
                    break;
                default:
                    cells[index].classList.remove('player', 'goal');
            }
        }
    }

    if (controller.isPaused) {
        document.getElementById('pauseOverlay').classList.add('visible');
    } else {
        document.getElementById('pauseOverlay').classList.remove('visible');
    }

    document.getElementById('generationCounter').textContent = controller.generation;
    document.getElementById('pauseReason').textContent = controller.pauseReason;
}