import { useState, useEffect } from "react";
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
import ListVideos from "./pages/ListVideos";
import { videos } from "./assets/data/videos";
import { formaciones } from "./assets/data/formaciones";

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const mostrarBarraBusqueda = () => {
    setToggleSearch(!toggleSearch);
  };

  const [videosUse, actualizarVideos] = useState(getInitialVideos);
  // eslint-disable-next-line no-unused-vars
  const [formacionesUse, actualizarFormaciones] = useState(formaciones);

  useEffect(() => {
    localStorage.setItem("videosUse", JSON.stringify(videosUse));
  }, [videosUse]);

  function getInitialVideos() {
    const savedVideos = localStorage.getItem("videos");
    return savedVideos ? JSON.parse(savedVideos) : videos;
  }

  //Agregar video
  const agregarVideo = (video) => {
    actualizarVideos([...videosUse, video]);
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
            <Route
              path="/"
              element={
                <Home videosUse={videosUse} formaciones={formacionesUse} />
              }
            />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route
              path="/video/:id"
              element={<Video videosUse={videosUse} />}
            />
            <Route
              path="/video/lista"
              element={<ListVideos videosUse={videosUse} />}
            />
            <Route
              path="/video/agregar"
              element={
                <AddVideo
                  agregarVideo={agregarVideo}
                  formaciones={formaciones}
                />
              }
            />
            <Route path="/video/editar/:id" element={<EditVideo />} />
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
