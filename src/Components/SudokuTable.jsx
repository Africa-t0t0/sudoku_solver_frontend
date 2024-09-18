import { convertJsonToMatrix } from '../Utils/utils.js'

export default function SudokuTable({ sudokuTable }) {
    const matrix = convertJsonToMatrix(sudokuTable);

    return (
        <table>
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