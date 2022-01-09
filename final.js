// This function should output the row requested by row index
function getRow(grid, rowIdx) {
	return grid[rowIdx];
}

// This function should output the column requested by column index
function getColumn(grid, colIdx) {
	let columns = [];
	//loop through all the 9 rows in the grid to find the column requested by column index
	for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
		columns.push(grid[rowIdx][colIdx]);
	}
	return columns;
}

//This function should output the 9 3*3 subgrid inside a sudoku puzzle
function getSection(grid, x, y) {
	let subgrid = [];

	let startingRow = 3 * y;
	let endingRow = startingRow + 3;
	let startingCol = 3 * x;
	let endingCol = 3 * x + 3;

	//loop through the sudoku puzzle board to retrieve the 9 3*3 grids
	for (let row = startingRow; row < endingRow; row++) {
		for (let col = startingCol; col < endingCol; col++) {
			subgrid.push(grid[row][col]);
		}
	}
	return subgrid;
}

// This function validates if the row and column in the sudoku puzzle consists of 1-9 numbers without any repeats
function includes1to9(subsection) {
	// Create a num array to get 1-9 numbers

	let numArray = [];
	for (let numIdx = 1; numIdx < 10; numIdx++) {
		numArray.push(numIdx);
	}

	//sort subsection so it has 1-9 numbers in order
	subsection = subsection.sort();

	//loop through the subsection and compare each element of the subsection with the numArray created above
	//return false if they dont match or have unique values
	//return true if there are unique 1-9 numbers in the subsection.
	for (let index = 0; index < subsection.length; index++) {
		if (subsection[index] !== numArray[index]) {
			return false;
		}
	}
	return true;
}

// This function validates if the puzzle passed is valid or not
function isValidSudoku(puzzle) {
	//create a new array to store the sudoku puzzle inputted in the function
	let newArr = [];
	//loop through the array to get the rows and columns
	for (let index = 0; index < 9; index++) {
		newArr.push(getRow(puzzle, index));
		newArr.push(getColumn(puzzle, index));
	}
	//loop through the subsection
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			newArr.push(getSection(puzzle, row, col));
		}
	}

	//compare the values inside the sudoku puzzle to have unique 1-9 numbers
	for (let index = 0; index < newArr.length; index++) {
		if (!includes1to9(newArr[index])) {
			return false;
		}
	}
	//console.log("includes", newArr);
	return true;
}

// This function compares if the two puzzle inputted are same or not
function isSame(puzzle1, puzzle2) {
	//first validate if the puzzle is a valid sudoku
	let firstPuzzle = isValidSudoku(puzzle1);
	//validate if its a valid sudoku
	let secondPuzzle = isValidSudoku(puzzle2);

	let bool;
	let output;

	//then loop through the puzzle to find out if the contents of the puzzle are equal
	if (firstPuzzle && secondPuzzle) {
		for (let i = 0; i < puzzle1.length; i++) {
			for (let j = 0; j < puzzle1.length; j++) {
				if (puzzle1[i][j] !== puzzle2[i][j]) {
					output = false;
					break;
				} else {
					output = true;
				}
			}
		}
	} else {
		return false;
	}

	bool = output;
	return bool;
}
