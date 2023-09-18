import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./Theme";
import styled from "styled-components";
import Header from "./components/Header";
import SliderTop from "./components/SliderTop";
import Category from "./components/Category";
import Projects from "./components/ListVideos/Projects";

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s ease;
`;

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const mostrarBarraBusqueda = () => {
    setToggleSearch(!toggleSearch);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer
        className={toggleSearch ? "header__nav--busca--visible" : ""}
      >
        <GlobalStyle />
        <Header mostrarBarraBusqueda={mostrarBarraBusqueda} />
        <SliderTop />
        <Category />
        <Projects />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
