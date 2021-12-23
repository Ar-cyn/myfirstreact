import logo from './bg.png';
import './App.css';
import Button from './js/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the internet!
        </p>
        <Button />
        <br>
            
        </br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          What would you prefer?
        </a>
      </header>
    </div>
  );
}

export default App;
