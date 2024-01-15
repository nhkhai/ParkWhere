import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import RootLayout from "./layouts/RootLayout";
import Map from "./components/Map";

import { GlobalProvider } from "./context/GlobalContext";
import { ModeProvider } from "./context/ModeContext";

import "./App.css";

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

function ErrorPage() {
  const location = useLocation();

  return (
    <p>
      You have entered an invalid path -{" "}
      <span style={{ color: "red" }}>{location.pathname}</span>
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <ModeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/search/:id" element={<Map />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
              </Route>
              {/* No match route. */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </ModeProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
