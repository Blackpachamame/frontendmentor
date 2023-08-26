import { useState, useEffect } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";

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
      <Header theme={theme} toggleTema={toggleTema} />
      <Container />
    </ThemeProvider>
  );
}

export default App;
