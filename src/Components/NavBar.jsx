import React, { useState } from 'react';


export default function NavBar() {
    const [user, setUser] = useState("Coming soon..");
    const [title, setTitle] = useState("Sudoku Solver Beta");

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className="container-fluid d-flex justify-content-between">
                <a href="#" className="navbar-brand">Sudoku Solver</a>
                <p className='text-white'>User: {user}</p>
            </div>
        </nav>
    );
}