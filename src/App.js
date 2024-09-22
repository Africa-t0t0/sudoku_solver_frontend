import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css';


import NavBar from './Components/NavBar';
import SudokuTableContainer from './Components/SudokuTableContainer';

function App() {
  return (
    <div className="App">
        <div className="container-fluid text-center">
          <NavBar />
      </div>
      <div className="container-fluid text center">
        <SudokuTableContainer
          title={"Sudoku Beta"}
        >

        </SudokuTableContainer>
      </div>
    </div>
  );
}

export default App;
