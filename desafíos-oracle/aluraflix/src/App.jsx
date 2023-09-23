import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Video from "./pages/Video";
import AddVideo from "./pages/AddVideo";
import EditVideo from "./pages/EditVideo";
import Error404 from "./pages/Error404";

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
        <BrowserRouter>
          <Header mostrarBarraBusqueda={mostrarBarraBusqueda} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/video/agregar" element={<AddVideo />} />
            <Route path="/video/:id/editar" element={<EditVideo />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

const StyledContainer = styled.div`
  transition: transform 0.3s ease;
`;
