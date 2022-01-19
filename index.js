// let puzzle = [
// 	[ 8, 9, 5, 7, 4, 2, 1, 3, 6 ],
// 	[ 2, 7, 1, 9, 6, 3, 4, 8, 5 ],
// 	[ 4, 6, 3, 5, 8, 1, 7, 9, 2 ],

// 	[ 9, 3, 4, 6, 1, 7, 2, 5, 8 ],
// 	[ 5, 1, 7, 2, 3, 8, 9, 6, 4 ],
// 	[ 6, 8, 2, 4, 5, 9, 3, 7, 1 ],

// 	[ 1, 5, 9, 8, 7, 4, 6, 2, 3 ],
// 	[ 7, 4, 6, 3, 2, 5, 8, 1, 9 ],
// 	[ 3, 2, 8, 1, 9, 6, 5, 4, 7 ]
// ];

function getRow(grid, rowIdx) {
	return grid[rowIdx];
}

// getRow(puzzle, 8);
// // -> [ 3,2,8,1,9,6,5,4,7 ]

// getRow(puzzle, 0);
// // -> [ 8,9,5,7,4,2,1,3,6 ]

function getColumn(grid, colIdx) {
	let columns = [];
	for (let i = 0; i < grid.length; i++) {
		columns.push(grid[i][colIdx]);
	}
	return columns;
}

// getColumn(puzzle, 0);
// // -> [ 8,2,4,9,5,6,1,7,3 ]

// getColumn(puzzle, 8);
// // -> [ 6,5,2,8,4,1,3,9,7 ]

// function getSection(puzzle, x, y) {
// 	let subgrid = [];

// 	//x:0, y:0
// 	if (x === 0 && y === 0) {
// 		for (let i = 0; i < 3; i++) {
// 			for (let j = 0; j < 3; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:1, y:0
// 	if (x === 1 && y === 0) {
// 		for (let i = 0; i < 3; i++) {
// 			for (let j = 3; j < 6; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:2,y:0

// 	if (x === 2 && y === 0) {
// 		for (let i = 0; i < 3; i++) {
// 			for (let j = 6; j < 9; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:0, y:1
// 	if (x === 0 && y === 1) {
// 		for (let i = 3; i < 6; i++) {
// 			for (let j = 0; j < 3; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:1, y:1

// 	if (x === 1 && y === 1) {
// 		for (let i = 3; i < 6; i++) {
// 			for (let j = 3; j < 6; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:2, y:1

// 	if (x === 2 && y === 1) {
// 		for (let i = 3; i < 6; i++) {
// 			for (let j = 6; j < 9; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:0, y:2

// 	if (x === 0 && y === 2) {
// 		for (let i = 6; i < 9; i++) {
// 			for (let j = 0; j < 3; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:1, y:2

// 	if (x === 1 && y === 2) {
// 		for (let i = 6; i < 9; i++) {
// 			for (let j = 3; j < 6; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	//x:2,y:2

// 	if (x === 2 && y === 2) {
// 		for (let i = 6; i < 9; i++) {
// 			for (let j = 6; j < 9; j++) {
// 				subgrid.push(puzzle[i][j]);
// 			}
// 		}
// 	}

// 	return subgrid;
// }

function getSection(grid, x, y) {
	let subgrid = [];

	let startingRow = 3 * y;
	let endingRow = startingRow + 3;
	let startingCol = 3 * x;
	let endingCol = 3 * x + 3;

	for (let row = startingRow; row < endingRow; row++) {
		for (let col = startingCol; col < endingCol; col++) {
			subgrid.push(grid[row][col]);
		}
	}
	return subgrid;
}



function includes1to9(subsection) {
	let numArray = [];
	for (let i = 1; i < 10; i++) {
		numArray.push(i);
	}

	subsection.sort();

	for (let i = 0; i < subsection.length; i++) {
		if(subsection[i] !== numArray[i]) {
			return false;
		}
	}
	return true;
}



function isValidSudoku(puzzle) {
	let newArr = [];

	for (let i = 0; i < 9; i++) {
		newArr.push(getRow(puzzle, i));
		//console.log("rows",newArr);
		newArr.push(getColumn(puzzle, i));
		//console.log("columns",newArr);
	}

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			newArr.push(getSection(puzzle, i, j));
			//console.log("section", newArr);
		}
	}

	for (let i = 0; i < newArr.length; i++) {
		if (!includes1to9(newArr[i])) {
			return false;
		}
	}
	//console.log("includes", newArr);
	return true;
}
