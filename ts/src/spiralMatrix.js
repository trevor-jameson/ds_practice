function spiralMatrix(n) {
    const resultMatrix = []
    for (let i = 0; i < n; i++) {
        resultMatrix[i] = [];
    };
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let counter = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let curCol = startCol; curCol <= endCol; curCol++) {
            resultMatrix[startRow][curCol] = counter;
            counter++
        }
        startRow++;
        for (let curRow = startRow; curRow <= endRow; curRow++) {
            resultMatrix[curRow][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let curCol = endCol; curCol >= startCol; curCol--) {
            resultMatrix[endRow][curCol] = counter;
            counter++;
        }
        endRow--;
        for (let curRow = endRow; curRow >= startRow; curRow--) {
            resultMatrix[curRow][startCol] = counter;
            counter++;
        }
        startCol++
    }
    return resultMatrix;
}

console.log(spiralMatrix(5));