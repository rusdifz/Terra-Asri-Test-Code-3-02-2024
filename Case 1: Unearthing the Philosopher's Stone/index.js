function calculate_diagonal_sum(grid_size) {

  // Initialize the spiral matrix with zeros
  const spiralMatrix = Array.from({ length: grid_size }, () => Array(grid_size).fill(0));
  
  let num = 1;
  let rowStart = 0
  let rowEnd = grid_size - 1
  let colStart = 0
  let colEnd = grid_size - 1;
  
  // Populate the spiral matrix
  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Move right
    for (let i = colStart; i <= colEnd; i++) {
      spiralMatrix[rowStart][i] = num++;
    }
    rowStart++;
  
    // Move down
    for (let i = rowStart; i <= rowEnd; i++) {
      spiralMatrix[i][colEnd] = num++;
    }
    colEnd--;
  
    // Move left
    for (let i = colEnd; i >= colStart; i--) {
      spiralMatrix[rowEnd][i] = num++;
    }
    rowEnd--;
  
    // Move up
    for (let i = rowEnd; i >= rowStart; i--) {
      spiralMatrix[i][colStart] = num++;
    }
    colStart++;
  }
  
  // Calculate the sum of diagonals
  let topLeftToBottomRightSum = 0
  let topRightToBottomLeftSum = 0

  // let primaryDiagonalSum = 0;
  // let secondaryDiagonalSum = 0;
  
  for (let i = 0; i < grid_size; i++) {
    // primaryDiagonalSum += spiralMatrix[i][i];
    // secondaryDiagonalSum += spiralMatrix[i][grid_size - i - 1];
    topLeftToBottomRightSum += spiralMatrix[i][i];
    topRightToBottomLeftSum += spiralMatrix[i][grid_size - i - 1];
  }
  
  // Return the sum of diagonals
  const diagonalSums = topLeftToBottomRightSum+topRightToBottomLeftSum
  
  // console.log(`Top-left to bottom-right = ${topLeftToBottomRightSum}`);
  // console.log(`Top-right to bottom-left = ${topRightToBottomLeftSum}`);

  return {
    topLeftToBottomRightSum, 
    topRightToBottomLeftSum,
    diagonalSums
  }

}

module.exports = {
  calculate_diagonal_sum
};