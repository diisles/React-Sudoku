import  global from 'global'
import { copyGrid, getRandomIndex, solveGrid } from 'utils'
import { GRID } from "typings";

/**
 * Removes numbers from a full grid to create a Sudoku Puzzle.
 * @param grid :9X9 Sudoku grid ;
 * @param attempts number of attempts to solve(higher means more difficult) - default 5.
 * @returns 
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
    while (attempts > 0) {
        let row = getRandomIndex()
        let col = getRandomIndex()

        while (grid[col][row] === 0) {
            row = getRandomIndex()
            col = getRandomIndex()
        }

        const backup = grid[row][col]
        grid[row][col] = 0

        
        const gridCopy = copyGrid(grid)

        global.counter = 0
        solveGrid(gridCopy)
    // attempt to solve the grid

        if (global.counter !== 1) {
            grid[row][col] = backup
            attempts--
        }

    }

    return grid

}

export default removeNumbers