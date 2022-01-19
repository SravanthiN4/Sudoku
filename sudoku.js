function getRow(grid, rowIdx) {
	//let rows = [];
	//rows.push(grid[rowIdx]);
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

function getSection(grid,x,y) {
	let subgrid = [];

let startingRow = 3 * y;
let endingRow = startingRow + 3;
let startingCol = 3 * x;
let endingCol = 3 * x + 3;

for(let row = startingRow; row < endingRow; row++) {
  for(let col = startingCol; col < endingCol; col++) {
	  subgrid.push(grid[row][col]);
  }
}
return subgrid;
}

function includes1to9(arr) {
	for (let i = 1; i <= 9; i++) {
	  if (arr.indexOf(i) === -1) {
		return false;
	  }
	}
  
	return true;
  }

// includes1to9([1,2,3,4,5,6,7,8,9])
// includes1to9([1,1,2,3,4,5,6,7,8])

function isValidSudoku(puzzle) {
	let newArr = [];

	for (let i = 0; i < 9; i++) {
		newArr.push(getRow(puzzle,i));
        newArr.push(getColumn(puzzle,i));
        

	}

	for(let i=0; i<3;i++) {
		for(let j = 0; j<3; j++) {
			newArr.push(getSection(puzzle,i,j));
            console.log(newArr);
		}
	}

    console.log("section", newArr);

	for(let i = 0; i < newArr.length; i++) {
		if(!includes1to9(newArr[i])) {
			return false;
		}
	}


	return true;
}

// This function validates if two sudoku puzzles are same or not

// function isSame(puzzle1, puzzle2) {

// for (let row = 0; row < puzzle1.length; row++) {
// 			for (let col = 0; col < puzzle1.length; col++) {
// 				if (puzzle1[row][col] !== puzzle2[row][col]) {
// 					return false;
// 				}
// 			}
// 		}

// 	return true;
// }
