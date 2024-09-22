export function convertJsonToMatrix(data) {
  const size = 9;
  const matrix = Array.from({ length: size }, () => new Array(size).fill(0));

  // Si el dato es un string, intentar parsearlo como JSON
  if (typeof data === 'string') {
      try {
          data = JSON.parse(data);
      } catch (error) {
          console.error("Error al parsear el string JSON:", error);
          return matrix;  // Devuelve una matriz vacía si el parseo falla
      }
  }

  // Asume que data ya es un objeto o matriz de arrays después de este punto
  if (Array.isArray(data) && data.length === size) {
      for (let col = 0; col < size; col++) {
          if (Array.isArray(data[col]) && data[col].length === size) {
              for (let row = 0; row < size; row++) {
                  matrix[row][col] = data[col][row];
              }
          } else {
              console.warn("El formato de los datos no es válido en la columna:", col);
          }
      }
  } else {
      console.warn("Los datos no tienen el formato esperado.");
  }

  return matrix;
}