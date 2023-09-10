import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hola Mundo</h1>
    </ThemeProvider>
  );
}

export default App;
