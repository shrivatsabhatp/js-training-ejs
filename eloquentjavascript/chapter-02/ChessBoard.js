"use strict";
let gridSize = 9;

let board = "";

for (let yAxis = 0; yAxis < gridSize; yAxis++) {
    for (let xAxis = 0; xAxis < gridSize; xAxis++) {
        if ((xAxis + yAxis) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);