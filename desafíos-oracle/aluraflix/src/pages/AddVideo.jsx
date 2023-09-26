import { useState } from "react";
import styled from "styled-components";
import Formulario from "../components/Formulario";
import { formaciones } from "../assets/data/formaciones";
import { videos } from "../assets/data/videos";

export default function AddVideo() {
  const [videosUse, actualizarVideos] = useState(videos);

  //Agregar video
  const agregarVideo = (video) => {
    //Spread operator
    actualizarVideos([...videosUse, video]);
  };

  console.log(videosUse);
  return (
    <StyledMain>
      <h1>Agregar Video</h1>
      <Formulario formaciones={formaciones} agregarVideo={agregarVideo} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
  }
`;
