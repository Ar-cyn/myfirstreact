import logo from './bg.png';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Message from './components/Message';

//jsx - js xml
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the internet!
        </p>
        
        <br>
            
        </br>
        <Button/>

        <Greet name = "Clint" heroName = "Hawkeye">
          <Message/>
        </Greet>
        <Greet name = "Kate" heroName = "Hawkeye"/>
        <Greet name = "Maya" heroName = "Echo"/>
        <Greet name = "Lucky" heroName = "Pizza Dog"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me!
        </a>
      </header>
    </div>
  );
}

export default App;
