function getRow(puzzle, row) {
    return puzzle[row];
  }
  
  function getColumn(puzzle, col) {
    let colArr = [];
  
    for (let i = 0; i < puzzle.length; i++) {
      colArr.push(puzzle[i][col]);
    }
  
    return colArr;
  }
  
  function getSection(puzzle, x, y) {
    x *= 3;
    y *= 3;
  
    let section = [];
  
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        section.push(puzzle[j][i]);
      }
    }
  
    return section;
  }

  function getRow(puzzle, row) {
    return puzzle[row];
  }
  
  function getColumn(puzzle, col) {
    let colArr = [];
  
    for (let i = 0; i < puzzle.length; i++) {
      colArr.push(puzzle[i][col]);
    }
  
    return colArr;
  }
  
  function getSection(puzzle, x, y) {
    x *= 3;
    y *= 3;
  
    let section = [];
  
    for (let i = y; i < y + 3; i++) {
      for (let j = x; j < x + 3; j++) {
        section.push(puzzle[i][j]);
      }
    }
  
    return section;
  }
  
  function includes1to9(arr) {
    for (let i = 1; i <= arr.length; i++) {
      if (arr.indexOf(i) === -1) {
        return false;
      }
    }
  
    return true;
  }
  
  function sudokuIsValid(puzzle) {
    let checks = [];
  
    for(let i = 0; i < 9; i++) {
      checks.push(getRow(puzzle, i));
      checks.push(getColumn(puzzle, i));
    }
  
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        checks.push(getSection(puzzle, i, j));
      }
    }
  
    for(let i = 0; i < checks.length; i++) {
      if(!includes1to9(checks[i])) { return false; }
    }
  
    return true;
  }