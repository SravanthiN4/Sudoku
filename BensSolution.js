let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

// [8, 9, 5, 2,7,1, 4,6,3,];

/**
 * Go into the given grid and pass back the row
 * at the provided index
 */
function getRow(grid, rowIdx) {
  return grid[rowIdx];
};

/**
 * Go into the given grid and pass back the row
 * at the provided index
 */
function getColumn(grid, columnIdx) {
  const solution = [];

  // For each row in our grid...
  for(let rowIdx = 0; rowIdx<grid.length; rowIdx++) {
    // Grab the value from our 2d grid
    const value = grid[rowIdx][columnIdx];

    // Add it to our solution
    solution.push(value);
  };
  return solution;
};

function getSection(grid, startingCol, startingRow) {
  const solution = [];

  // The starting var shifts our loop over to target new rows or columns
  startingRow *= 3;
  startingCol *= 3;

  // For each of the 3 rows we care about
  for(let row=startingRow; row< startingRow + 3; row++) {
    const currRow = grid[row];

    // For each of the 3 columns we care about in that row
    for(let col=startingCol; col < startingCol + 3; col++) {
      const currValue = currRow[col];

      // Add that number to our solution
      solution.push(currValue);
    }
  };

  return solution;
}

// [4, 3, 1, 2]
// function includes1to9(arr) {
//     const newArr = [...arr].sort(); // [1, 2, 3, 4];
  
//   // return arr.join("") === "123456789";

//   for(let curr=0; curr<9; curr++) {
//     if(newArr[curr] !== curr+1) return false;
//   }

//   return true;
// };

function includes1to9(arr) {
  // Map to mark whether or not we've seen a specific number
  const numbersFound = [];

  // For each number insied our array
  for(var currIndex=0; currIndex<arr.length; currIndex++) {
    const currNumber = arr[currIndex];

    // If we haven't seen the current number yet, mark it
    if(!numbersFound[currNumber]) numbersFound[currNumber] = true;
    // Otherwise if we have seen the number, return false
    else return false;
  }

  // **NOTE: This solution doesn't consider what'd happen if we don't have enough numbers or if we're given numbers that aren't between 1 and 9**
  return true;
};

function sudokuIsValid(grid) {
  // Each row include 1 to 9
  for(let row=0; row<9; row++) {
    const currRow = getRow(grid, row);
    if(!includes1to9(currRow)) return false;
  };

  // Each column includes 1 to 9
  for(let col=0; col<9; col++) {
    const currCol = getColumn(grid, col);
    if(!includes1to9(currCol)) return false;
  };

  // Each subsection needs to include 1 to 9
  for(let row=0; row<3; row++) {
    for(let col=0; col<3; col++) {
      const currSub = getSection(grid, row, col);
      if(!includes1to9(currSub)) return false;
    };
  };

  // Since we've passed all our other checks without returning false, return true
  return true;
};


console.log(sudokuIsValid(puzzle));
// => true

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

console.log(sudokuIsValid(p8zzle));
// => false