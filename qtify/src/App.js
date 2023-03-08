import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage"

function App() {
  const defaultTheme = createTheme({
    typography: {
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
        <Header />
        <HeroImage />
      </ThemeProvider>
    </div>
  );
}

export default App;
