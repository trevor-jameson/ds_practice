import minimumIsland, { Grid } from './minimumIsland';

describe("minimumIsland()", () => {
    test("minimumIsland() => 2", () => {

        const grid: Grid = [
            ["W", "L", "W", "W", "W"],
            ["W", "L", "W", "W", "W"],
            ["W", "W", "W", "L", "W"],
            ["W", "W", "L", "L", "W"],
            ["L", "W", "W", "L", "L"],
            ["L", "L", "W", "W", "W"],
          ]

        const result = minimumIsland(grid);
        expect(result).toBe(2);
    })
    test("minimumIsland() => ", () => {

        const grid: Grid = [
            ["L", "W", "W", "L", "W"],
            ["L", "W", "W", "L", "L"],
            ["W", "L", "W", "L", "W"],
            ["W", "W", "W", "W", "W"],
            ["W", "W", "L", "L", "L"],
          ]

        const result = minimumIsland(grid);
        expect(result).toBe(1);
    })
    test("minimumIsland() => 9", () => {

        const grid: Grid = [
            ["L", "L", "L"],
            ["L", "L", "L"],
            ["L", "L", "L"],
          ]

        const result = minimumIsland(grid);
        expect(result).toBe(9);
    })
    test("minimumIsland() => 1", () => {

        const grid: Grid = [
            ["W", "W"],
            ["L", "L"],
            ["W", "W"],
            ["W", "L"],
          ]

        const result = minimumIsland(grid);
        expect(result).toBe(1);
    })
})