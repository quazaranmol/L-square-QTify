import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./components/LandingPage";

function App() {
  const defaultTheme = createTheme({
    typography: {
      h6: {
        fontSize: 17,
      },
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeightMedium: 700,
      button:{
        textTransform:'none',
      }
    },
      palette:{
        primary:{
          main:"#121212",
          contrastText: "#34C94B",
        }
      },
  });

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
