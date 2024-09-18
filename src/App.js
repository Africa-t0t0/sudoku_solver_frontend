import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css';


import NavBar from './Components/NavBar';
import Container from './Components/Container';

function App() {
  return (
    <div className="App">
        <div className="container-fluid text-center">
          <NavBar />
      </div>
      <div className="container-fluid text center">
        <Container
          title={"Sudoku Beta"}
        >
          Currently showing empty sudoku
        </Container>
      </div>
    </div>
  );
}

export default App;
