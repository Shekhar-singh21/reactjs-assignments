import logo from './logo.svg';
import './App.css';

function App() {

  const arr = ['Component based architecture','Virtual Dom for efficient update','Rich ecosystem and community ','Cross-platform development','strong community support']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1>Benifits of using react...</h1>
        <ol>

        {arr.map(item=>
        <li key={item}>{item}</li>
        
        )}         
        </ol>
        <button>Get Started...</button>
      </header>
    </div>
  );
}

export default App;
