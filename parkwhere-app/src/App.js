import logo from './logo.svg';
import './App.css';

// Place the shared .env file outside of the src folder in the project root directory. 
// Define the React App API Key variable in the .env file in the following syntax (variable name can be changed). 
//REACT_APP_API_KEY = A1234567890B0987654321C

// Do not commit the .env file. 
// To use the env object to access the environment variables in the React App, 
// use the following call with the defined variable name defined previously above. 
//process.env.REACT_APP_API_KEY

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
