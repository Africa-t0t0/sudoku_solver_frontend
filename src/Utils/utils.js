export function convertJsonToMatrix(data) {
    const size = 9;
    const matrix = Array.from({ length: size }, () => new Array(size).fill(0));

    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size; row++) {
        matrix[row][col] = data[col][row];
      }
    }

    return matrix;
  }