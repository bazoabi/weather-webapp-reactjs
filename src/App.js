import logo from "./logo.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Create theme for Rubik font

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik"],
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
          <Typography variant="h1" gutterBottom>
            כתיבת טקסט
          </Typography>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
