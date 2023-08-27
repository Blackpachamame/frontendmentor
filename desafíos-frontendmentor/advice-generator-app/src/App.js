import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import Box from "./Components/Box";


/* Advice #<!-- Advice ID goes here --> 
 
 "<!-- Advice text goes here -->" */

function App() {

  const [theme, setTema] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : temaClaro;
  }

  const toggleTema = () => {
    setTema((theme) => !theme);
  }

  return (
    <ThemeProvider theme={theme ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <Box theme={theme} toggleTema={toggleTema} />
    </ThemeProvider>
  );
}

export default App;
