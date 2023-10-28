/* Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.
You may assume that the grid contains at least one island. */

export type Cell = "L" | "W";

export type Grid = Array<Cell[]>;

function minimumIsland(grid: Grid) {
    const visited = new Set();
    let min = Infinity;

    grid.forEach((row, rowInd: number) => {
        row.forEach((cell: Cell, colInd: number) => {

            let coord = `${rowInd},${colInd}`;

            if (cell === "L" && !visited.has(coord)) {

                const result = measureIsland(cell, coord, visited, grid);
                min = Math.min(min, result);
            }

            visited.add(coord)
        })
    })
    return min;
}

// TREVOR: Come back to Set vs. any type 
function measureIsland(cell: Cell, coord: string, visited: any, grid: Grid): number {
    if (!visited.has(coord)) {

        visited.add(coord);
        let [rowInd, colInd] = coord.split(",").map(Number);

        if (cell === "L") {

            let count = 1;
            const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];

            for (const [rowD, colD] of deltas) {

                const neighRow = rowInd + rowD;
                const neighCol = colInd + colD;

                if (inBounds(neighRow, neighCol, grid)) {
                    
                    const neighCell = grid[neighRow][neighCol];
                    const neighCoord = `${neighRow},${neighCol}`;

                    const result = measureIsland(neighCell, neighCoord, visited, grid);
                    if (result !== Infinity) {
                        count += result;
                    }
                }
            }
            return count;
        }
    } 
    return Infinity;
}

function inBounds(neighRow: number, neighCol: number, grid: Grid) {
    return (neighRow >= 0 && neighRow < grid.length) && (neighCol >= 0 && neighCol < grid[0].length)
}

export default minimumIsland;