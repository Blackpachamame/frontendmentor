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
import ListFormaciones from "./pages/ListFormaciones";
import AddFormacion from "./pages/AddFormacion";

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const mostrarBarraBusqueda = () => {
    setToggleSearch(!toggleSearch);
  };

  const [videosUse, actualizarVideos] = useState(getInitialVideos);
  const [formacionesUse, actualizarFormaciones] = useState(formaciones);

  useEffect(() => {
    localStorage.setItem("videosUse", JSON.stringify(videosUse));
  }, [videosUse]);

  function getInitialVideos() {
    const savedVideos = localStorage.getItem("videosUse");
    return savedVideos ? JSON.parse(savedVideos) : videos;
  }

  //Agregar video
  const agregarVideo = (video) => {
    actualizarVideos([...videosUse, video]);
  };

  //Eliminar video
  const eliminarVideo = (id) => {
    const nuevosVideos = videosUse.filter((video) => video.id !== id);
    actualizarVideos(nuevosVideos);
  };

  //Actualizar video
  const actualizarVideo = (videoActualizado) => {
    const videosActualizados = videosUse.map((video) =>
      videoActualizado.id === video.id
        ? {
            ...video,
            urlVideo: videoActualizado.urlVideo,
            imgVideo: videoActualizado.imgVideo,
            formacion: videoActualizado.formacion,
            title: videoActualizado.title,
            descripcion: videoActualizado.descripcion,
          }
        : video
    );
    actualizarVideos(videosActualizados);
  };

  //Agregar formacion
  const agregarFormacion = (formacion) => {
    actualizarFormaciones([...formacionesUse, formacion]);
  };

  //Eliminar formacion
  const eliminarFormacion = (id) => {
    const nuevosformaciones = formacionesUse.filter(
      (formacion) => formacion.id !== id
    );
    actualizarFormaciones(nuevosformaciones);
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

            {/* Videos */}
            <Route
              path="/video/:id"
              element={<Video videosUse={videosUse} />}
            />
            <Route
              path="/video/lista"
              element={
                <ListVideos
                  videosUse={videosUse}
                  eliminarVideo={eliminarVideo}
                />
              }
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
            <Route
              path="/video/editar/:id"
              element={
                <EditVideo
                  videosUse={videosUse}
                  actualizarVideo={actualizarVideo}
                  formaciones={formaciones}
                />
              }
            />

            {/* Formaciones */}
            <Route
              path="/formacion/lista"
              element={
                <ListFormaciones
                  formacionesUse={formacionesUse}
                  eliminarFormacion={eliminarFormacion}
                />
              }
            />
            <Route
              path="/formacion/agregar"
              element={
                <AddFormacion
                  agregarFormacion={agregarFormacion}
                  formaciones={formaciones}
                />
              }
            />
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
