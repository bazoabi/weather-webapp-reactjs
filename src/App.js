import logo from "./logo.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

// React
import { useEffect, useState } from "react";

// External Libraries
import axios from "axios";
import moment from "moment";
import "moment/locale/he"; // Hebrew locale
import "moment/locale/en-gb"; // English locale

//Create theme for Rubik font

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik"],
  },
});

// API Key
const apiKey = process.env.REACT_APP_API_KEY;

// API Call Language
const lang = "he"; // Hebrew

// Cancel Axios
let cancelAxios = null;

// Setting Moment Locale to Hebrew
moment.locale(lang);

function App() {
  const [dateAndTime, setDateAndTime] = useState("");
  const [temp, setTemp] = useState({
    number: 0,
    description: "",
    min: 0,
    max: 0,
    icon: "",
  });

  useEffect(() => {
    // Set date and time based on the current locale
    setDateAndTime(moment().format("LLLL"));

    // Fetch data from the API
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=32.794044&lon=34.989571&lang=${lang}&appid=${apiKey}`,
        {
          cancelToken: new axios.CancelToken(function (cancel) {
            // An executor function receives a cancel function as a parameter
            cancelAxios = cancel; // Assign the cancel function to the variable
          }),
        }
      )
      .then(function (response) {
        // handle success
        console.log("success: ", response);

        // Extract temperature data from the response and update state
        const responseTemp = response.data.main.temp - 273.15;
        const responseDescription = response.data.weather[0].description;
        const responseMin = response.data.main.temp_min - 273.15;
        const responseMax = response.data.main.temp_max - 273.15;
        const responseIcon = response.data.weather[0].icon;
        setTemp({
          number: Math.round(responseTemp),
          description: responseDescription,
          min: Math.round(responseMin),
          max: Math.round(responseMax),
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });
        console.log("temp: ", temp);
      })
      .catch(function (error) {
        // handle error
        console.log("error: ", error);
      });

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      if (cancelAxios) {
        cancelAxios("Request canceled due to component unmounting.");
      }
    };
  }, []);

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

                  <Typography variant="h6" style={{ marginRight: "3vh" }}>
                    {dateAndTime}
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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="h1"
                      fontWeight={100}
                      style={{ marginRight: "2vh", textAlign: "right" }}
                    >
                      {temp.number}°
                    </Typography>
                    {/* TODO: Temp Image */}
                    <div>
                      <img src={temp.icon === "" ? null : temp.icon} alt="" />
                    </div>
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
                      {temp.description}
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
                      מ: {temp.min}°
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={100}
                      style={{ marginRight: "1vh" }}
                    >
                      עד: {temp.max}°
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
