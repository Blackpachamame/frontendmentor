import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { videos } from "../assets/data/videos.js";
import Modal from "../components/Modal/index.jsx";

function obtenerVideo(id) {
  const unVideo = videos.filter((video) => video.id === id);
  return unVideo;
}

export default function Video() {
  const [openModal, setOpenModal] = useState(false);

  const url = new URL(window.location).pathname;
  const id = url.slice(7);
  const video = obtenerVideo(id)[0];

  return (
    <StyledContainer>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        url={video.urlVideo}
      />
      <div className="video__descripcion">
        <div className="video__categoria">{video.categoria}</div>
        <h1>{video.title}</h1>
        <p>{video.descripcion}</p>
        <ContainerButtons>
          <button className="video__ver" onClick={() => setOpenModal(true)}>
            Ver ahora
          </button>
          <Link to="/" className="video__volver">
            Volver
          </Link>
        </ContainerButtons>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.main`
  max-width: 874px;
  padding-inline: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  .video__categoria {
    margin-bottom: 3px;
    font-size: 12px;
    color: var(--color-black-ultra-dark);
    background-color: var(--color-white);
    border-radius: 10px;
    padding: 3px 10px;
    display: inline-block;
  }
  .video__descripcion h1,
  .video__descripcion p {
    font-family: var(--ff-body);
    margin-bottom: 10px;
  }
  @media (max-width: 1024px) {
    padding-inline: 16px;
    flex-direction: column;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  .video__volver,
  .video__ver {
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0;
    padding: 14px 22px;
    border-radius: 5px;
    display: inline-block;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .video__ver {
    color: var(--color-black-ultra-dark);
    background: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
  }
  .video__volver {
    color: var(--color-secondary);
    background: var(--color-black-dark);
    border: 2px solid var(--color-secondary);
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-ultra-dark);
    }
  }
`;
