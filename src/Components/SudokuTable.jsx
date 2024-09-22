import { convertJsonToMatrix } from '../Utils/utils.js'
import './SudokuTable.css';

export default function SudokuTable({ sudokuTable }) {
    console.log("sudoku table!!!", sudokuTable);
    let matrix;

    if (sudokuTable === undefined) {
        console.log("no sudoku table")
        matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    } else {
        matrix = convertJsonToMatrix(sudokuTable);
    }

    return (
        <table className="table table-dark table-striped table-font">
            <tbody>
            {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
);

}