import logo from './logo.svg';
import './App.css';

/* Place the shared .env file outside of the src folder in the project root directory. 
Define the React App API Key variable in the .env file in the following syntax (variable name can be changed but must begin with REACT_APP_).  */
//REACT_APP_API_KEY = A1234567890B0987654321C

/* Do not commit the .env file. 
To use the env object to access the environment variables in the React App, 
use the following call with the defined variable name defined previously above.  */
// process.env.REACT_APP_API_KEY
// or for html, calling the variable name defined previously above with the syntax %REACT_APP_API_KEY%. 

// Alternatively, instead of the .env file, you can define it as an environment variable in the system (depends on the system) or temporarily on execution. 
/* In Windows using cmd.exe (Quotes around the variable assignment are required to avoid a trailing whitespace. ): 
set "REACT_APP_API_KEY=A1234567890B0987654321C" && npm start
In Windows using Powershell: 
($env:REACT_APP_API_KEY = "A1234567890B0987654321C") -and (npm start)
In Linux, MacOS using Bash: 
REACT_APP_API_KEY=A1234567890B0987654321C npm start */

/* There is also a built-in environment variable called NODE_ENV. You can read it from process.env.NODE_ENV. 
This can be used to define performing actions conditionally depending on the build. 
When you run npm start, it is always equal to 'development', when you run npm test it is always equal to 'test', 
and when you run npm run build to make a production bundle, it is always equal to 'production'. You cannot override NODE_ENV manually. 
For example: 
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
} */

// Test comment

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
