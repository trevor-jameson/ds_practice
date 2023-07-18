const sampleMatrix = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
]

const sampleResult = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
]


// ATTEMPT #1

// function removeIslands(matrix) {
//     const matches = {};
//     let direction = 'east';
//     let totalPixels = matrix.length * matrix[0].length;
//     let checkedPixels = 0;
//     let columnInd = 0;
//     let rowInd = 0;
//     while (checkedPixels < totalPixels) {
//         let currentElem = matrix[rowInd][columnInd];
//         if (currentElem === 1) {
//             let north = matrix[rowInd - 1][columnInd];
//             let south = matrix[rowInd + 1][columnInd];
//             let east = matrix[rowInd][columnInd + 1];
//             let west = matrix[rowInd][columnInd - 1];
//             if (north === undefined || south === undefined || east === undefined || west === undefined) {
//                 matches[`_${rowInd}${columnInd}`] = true;   
//             } else if (
//                 matches[`_${rowInd - 1}${columnInd}`] ||
//                 matches[`_${rowInd + 1}${columnInd}`] ||
//                 matches[`_${rowInd}${columnInd - 1}`] ||
//                 matches[`_${rowInd}${columnInd + 1}`]) {
//                     matches[`_${rowInd}${columnInd}`] = true;
//             }
//         }
//         switch (direction) {
//             case 'east':
//                 if (matrix[rowInd][columnInd + 1] === undefined) {
//                     direction = "south"
//                     rowInd++
//                 } else {
//                     columnInd++
//                 }
//                 break;
//             case 'south':
//                 if (matrix[rowInd + 1][columnInd] === undefined) {
//                     direction = "west"
//                     columnInd--
//                 } else {
//                     rowInd++
//                 }
//                 break;
//             case 'west':
//                 if (matrix[rowInd][columnInd - 1 ] === undefined) {
//                     direction = "north"
//                     rowInd--
//                 } else {
//                     columnInd++
//                 }
//                 break;
//             case 'east':
//                 if (matrix[rowInd][columnInd + 1] === undefined) {
//                     direction = "south"
//                     rowInd++
//                 } else {
//                     columnInd++
//                 }
//                 break;
//         }

//         checkedPixels++;
//     }
//     // matrix.forEach((row, rowInd) => {
//     //     row.forEach((elem, columnInd) => {
//     //         if (elem === 1) {
//     //             if (matrix[rowInd + 1][columnInd] === undefined ||
//     //                 matrix[rowInd - 1][columnInd] === undefined ||
//     //                 matrix[rowInd][columnInd + 1] === undefined ||
//     //                 matrix[rowInd][columnInd - 1] === undefined) {
//     //                     matches[`_${rowInd}${columnInd}`] = "island"
//     //                 }
//     //         }
//     //     })
//     // })
// }

// Attempt #2
// function removeIslands(matrix) {
//     const maxColLen = matrix.length - 1;
//     const maxRowLen = matrix[0].length -1;
//     for (let y = 0; y <= maxColLen; y++) {
//         checkEdgeCoord(y, 0, matrix)
//         checkEdgeCoord(y, maxColLen, matrix)
//     }
//     for (let x = 0; x <= maxRowLen; x++) {
//         checkEdgeCoord(0, x, matrix)
//         checkEdgeCoord(maxRowLen, x, matrix)
//     }
//     return matrix;
// }

// function checkEdgeCoord(y, x, matrix) {
//     if (matrix[y][x] === 1) {
//         checkNeighbors(y, x, matrix)
//     }
// }

// function checkNeighbors(curRow, curCol, matrix) {
//     if (matrix[curRow][curCol] === 1) {
//         matrix[curRow][curCol] = 0;
//         const neighborPositions = [
//             [0, -1],
//             [0, 1],
//             [-1, 0],
//             [1, 0],
//         ];
//         neighborPositions.forEach(neighPos => {
//             let neighRowPos = (curRow + neighPos[0]);
//             let neighColPos = (curCol + neighPos[1]);
//             const curNeigh = matrix[neighRowPos] ? matrix[neighRowPos][neighColPos] : 0;
//             if (curNeigh === 1) {
//                 checkNeighbors(neighRowPos, neighColPos, matrix)
//             }
//         })
//     }
// }

// ATTEMPT #3 (cleanup) 

function removeIslands(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        checkCoord(i, 0, matrix);
        checkCoord(i, matrix.length - 1, matrix);
        checkCoord(0, i, matrix);
        checkCoord(matrix.length - 1, i, matrix);
    }
    return matrix;
}

function checkCoord(rowIdx, colIdx, matrix) {
    if (matrix[rowIdx][colIdx] === 1){
        matrix[rowIdx][colIdx] = 0;
        const neighborOffsets = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        neighborOffsets.forEach(neighOffset => {
            let neighRowIdx = neighOffset[0] + rowIdx;
            let neighColIdx = neighOffset[1] + colIdx;
            if (matrix[neighRowIdx] && matrix[neighRowIdx][neighColIdx] === 1) {
                checkCoord(neighRowIdx, neighColIdx, matrix);
            }
        })
    }
}




function checkCorrectness(result, sampleResult) {
    let isCorrect = true;
    console.log(result)
    result.forEach((row, rowInd) => {
        row.forEach((elem, columnInd) => {
            if (elem !== sampleResult[rowInd][columnInd]) {
                isCorrect = false;
            }
        })
    })
    return isCorrect;
}

// const result = removeIslands(sampleMatrix)
let result = removeIslands(sampleMatrix);
console.log("Your solution is: ", checkCorrectness(result, sampleResult));



