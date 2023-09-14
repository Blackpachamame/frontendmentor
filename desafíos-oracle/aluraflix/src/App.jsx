import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./Theme";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Slider />
    </ThemeProvider>
  );
}

export default App;
