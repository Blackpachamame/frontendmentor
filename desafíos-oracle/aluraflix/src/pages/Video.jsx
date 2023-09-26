import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { videos } from "../assets/data/videos.js";
import Modal from "../components/Modal/index.jsx";
import { BsPlayFill, BsPencilFill, BsTrashFill } from "react-icons/bs";

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
        <div className="video__formacion">{video.formacion}</div>
        <h1>{video.title}</h1>
        <p>{video.descripcion}</p>
        <ContainerButtons>
          <button className="video__ver" onClick={() => setOpenModal(true)}>
            <BsPlayFill style={{ fontSize: "19px" }} /> Ver ahora
          </button>
          <Link to="/" className="video__volver">
            Volver
          </Link>
          <div className="video__edicion">
            <Link to={"/video/" + id + "/editar"} className="video__editar">
              <BsPencilFill />
            </Link>
            <Link to="/" className="video__borrar">
              <BsTrashFill />
            </Link>
          </div>
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
  .video__formacion {
    margin-bottom: 5px;
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
    flex-direction: column;
  }
  @media (max-width: 425px) {
    padding-inline: 16px;
  }
`;

const ContainerButtons = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 24px;

  .video__volver,
  .video__ver {
    font-size: 18px;
    font-weight: 700;
    padding: 14px 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .video__ver {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color-black-ultra-dark);
    background: var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
  }
  .video__volver {
    color: var(--color-secondary);
    background: var(--color-black-dark);
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-ultra-dark);
    }
  }

  .video__edicion {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .video__editar,
  .video__borrar {
    padding: 10px;
    color: var(--color-secondary);
    background: var(--color-black-ultra-dark);
    border: 2px solid var(--color-secondary);
    border-radius: 50%;
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-medium);
    }
  }
`;
