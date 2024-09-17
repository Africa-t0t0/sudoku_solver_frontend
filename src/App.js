import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
        <div className="container-fluid text-center">
          <NavBar />
          <h1 className="text-center">Hello, welcome to Sudoku Solver! :)</h1>
          <button className="btn btn-primary">Click Me</button>
      </div>
    </div>
  );
}

export default App;
