import React from "react";
import Pokedex from "./views/Pokedex/Pokedex";
import "./GlobalStyles.scss";
import { ThemeProvider } from "emotion-theming";
// import theme from "@rebass/preset";

const theme = {
   fontSizes: [12, 14, 16, 24, 32, 48, 64],
   colors: {
      primary: "red",
      gray: "#f6f6ff",
      secondary: "black"
   },
   buttons: {
      primary: {
         color: "white",
         bg: "primary",
         border: "1px solid black"
      },
      outline: {
         color: "primary",
         bg: "transparent",
         boxShadow: "inset 0 0 0 2px"
      }
   }
};

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <Pokedex />
         </div>
      </ThemeProvider>
   );
};

export default App;
