import Grid from './grid.js';

export let grid = new Grid(11, 11);
grid.fill(0);

export function writeToCell(row, col, value) {
    grid .set({row, col }, value);
}

export function readFromCell(row, col) {
    return grid.get({ row, col });
}

export function updateGrid() {
    const newGrid = new Grid(grid.rows, grid.cols);
    for (let row = 0; row < grid.rows; row++) {
        for (let col = 0; col < grid.cols; col++) {
            let numberOfNeighbours = grid.neighbourValues({ row, col }).reduce((sum, val) => sum + val);
            switch (numberOfNeighbours) {
                case 0:
                case 1:
                    newGrid.set({ row, col }, 0);
                    break;
                case 2:
                    newGrid.set({ row, col }, grid.get({ row, col }));
                    break;
                case 3:
                    newGrid.set({ row, col }, 1);
                    break;
                default:
                    newGrid.set({ row, col }, 0);
            }
        }
    }
    grid = newGrid;
}

export function resetGrid() {
    grid.fill(0);
    // Set some initial live cells for testing
    writeToCell(4,5,1);
    writeToCell(5,4,1);
    writeToCell(5,5,1);
    writeToCell(5,6,1);
    writeToCell(6,5,1);
    //writeToCell(Math.floor(Math.random() * grid.rows), Math.floor(Math.random() * grid.cols), 1);
    //writeToCell(Math.floor(Math.random() * grid.rows), Math.floor(Math.random() * grid.cols), 1);
}

    