import logo from "./logo.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

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
        <Container maxWidth="sm">
          {/* Content Container */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            {/* Card */}
            <div
              style={{
                width: "100%",
                background: "rgba(30, 209, 222, 0.8)",
                color: "white",
                padding: "2vh",
                borderRadius: "3vh",
                boxShadow: "2px 2px 50px rgba(0, 136, 170, 0.64)",
              }}
            >
              {/* Content */}
              {/* City & Time */}
              <div>
                <div
                  dir="rtl"
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                    textAlign: "right",
                  }}
                >
                  <Typography variant="h1" style={{ marginRight: "2vh" }}>
                    חיפה
                  </Typography>

                  <Typography variant="h5" style={{ marginRight: "3vh" }}>
                    יום שני 10.10.2023
                  </Typography>
                </div>
              </div>
              {/* ==== City & Time ==== */}

              <hr />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "2vh",
                  paddingLeft: "4vh",
                  paddingRight: "4vh",
                  direction: "rtl",
                }}
              >
                {/* Degree & Description */}
                <div style={{ marginLeft: "4vh" }}>
                  {/* Degree */}
                  <div>
                    <Typography
                      variant="h1"
                      fontWeight={100}
                      style={{ marginRight: "2vh", textAlign: "right" }}
                    >
                      25
                    </Typography>
                    {/* TODO: Temp Image */}
                    <div></div>
                    {/* ==== Temp Image ==== */}
                  </div>
                  {/* ==== Degree ==== */}
                  {/* Description */}
                  <div>
                    <Typography
                      variant="h6"
                      fontWeight={100}
                      style={{ marginRight: "2vh", textAlign: "right" }}
                    >
                      מעונן חלקית
                    </Typography>
                  </div>
                  {/* Min & Max temps */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginRight: "2vh",
                    }}
                  >
                    <Typography variant="h6" fontWeight={100}>
                      מ: 20°
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={100}
                      style={{ marginRight: "1vh" }}
                    >
                      עד: 30°
                    </Typography>
                  </div>
                  {/* ==== Min & Max temps ==== */}
                  {/* ==== Description ==== */}
                </div>
                {/* ==== Degree & Description ==== */}

                {/* Image Content */}
                <div>
                  <CloudIcon style={{ fontSize: "200px" }} />
                </div>
                {/* ==== Image Content ==== */}
              </div>

              {/* ==== Content ==== */}
            </div>
            {/* ==== Card ==== */}
            {/* Translation Container */}
            <div style={{ width: "100%", textAlign: "left", marginTop: "2vh" }}>
              <Button variant="text">אנגלית</Button>
            </div>
            {/* ==== Translation Container ==== */}
          </div>
          {/* ==== Content Container ==== */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
