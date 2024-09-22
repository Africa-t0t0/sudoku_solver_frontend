import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import SudokuTable from './SudokuTable';

export default function SudokuTableContainer() {
  const [sudokuTable, setSudokuTable] = useState('');
  const [title, setTitle] = useState('Sudoku Solver');
    const backendUrl = process.env.REACT_APP_API_URL
  // Manejamos la conexión de socket aquí

  useEffect(() => {
    fetch(`${backendUrl}/get_sudoku`)
    .then(response => response.json())
    .then(data => {
        const parsedData = JSON.parse(data);
        setSudokuTable(parsedData)
    }
    )
    .catch(error => console.error('Error:', error));
  }, []);


  useEffect(() => {
    const socket = io('http://localhost:5001', {
      transports: ['websocket'],
      forceNew: true,
    });

    // Conectado correctamente
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    // Recibe actualizaciones del sudoku
    socket.on('update', (data) => {
      console.log('Received update:', data.data);
      setSudokuTable(data.data); // Actualiza el estado de la tabla
    });

    // Recibe notificación de cuando el sudoku se completa
    socket.on('completed', (data) => {
      console.log('Received completed:', data.data);
      setSudokuTable(data.data); // Actualiza el estado con la tabla final
    });

    // Cleanup
    return () => {
      socket.off('update');
      socket.off('completed');
      socket.disconnect();
    };
  }, []);

  // Función para iniciar la resolución del sudoku
  const startSolving = async () => {
    const response = await fetch(`${backendUrl}/solve`, { method: 'POST' });
    console.log('Sudoku solving started', response);
  };


  return (
    <>
      <div className="container rounded bg-dark">
        <div className="container-header text-center border-bottom">
          <h1 className="text-white">{title}</h1>
        </div>
        <div className="container-body text-white text-center">
          {/* Muestra los hijos si los hay */}
          <div className="justify-content-center d-flex mt-2">
            {sudokuTable !== '' ? (
              <SudokuTable sudokuTable={sudokuTable} />
            ) : (
              'No data received!'
            )}
          </div>
          <div className="container-footer border-top">
            <button
              type="button"
              onClick={startSolving}
              className="btn btn-danger my-2"
            >
              Solve sudoku
            </button>
          </div>
        </div>
      </div>
    </>
  );
}