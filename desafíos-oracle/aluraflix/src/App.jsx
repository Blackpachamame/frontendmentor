import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./Theme";
import styled from "styled-components";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Category from "./components/Category";
import ListVideos from "./components/ListVideos";

const StyledContainer = styled.div`
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
        <Slider />
        <Category />
        <ListVideos />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
