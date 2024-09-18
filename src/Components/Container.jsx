import { useState, useEffect } from "react";

import SudokuTable from "./SudokuTable";

export default function Container({ title, ...props }) {
    const [sudokuTable, setSudokuData] = useState("")
    const backendUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${backendUrl}/get_sudoku`)
        .then(response => response.json())
        .then(data => {
            const parsedData = JSON.parse(data);
            setSudokuData(parsedData)
        }
        )
        .catch(error => console.error('Error:', error));
      }, []);

      console.log(sudokuTable)

    return(
        <>
            <div className="container rounded bg-dark">
                <div className="container-header text-center border-bottom">
                    <h1 className="text-white">{title}</h1>
                </div>
                <div className="container-body text-white text-center">
                    {props.children}
                    <div>
                        {sudokuTable !== "" ? <SudokuTable sudokuTable={sudokuTable}/> : "no data received!"}
                    </div>
                </div>
            </div>
        </>
    );
}