/* eslint-disable no-undef */
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

export default function ListVideos({ videosUse, eliminarVideo }) {
  return (
    <StyledMain>
      <h1>Lista de Videos</h1>
      <div className="video__table-container">
        <StyledTable>
          <thead>
            <tr>
              <th>Título</th>
              <th>Formación</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {videosUse.map((video) => (
              <tr key={video.id}>
                <td>{video.title}</td>
                <td>{video.formacion}</td>
                <ContainerAcciones>
                  <Link
                    to={`/video/editar/${video.id}`}
                    className="video__editar"
                  >
                    <BsPencilFill />
                  </Link>
                  <button
                    onClick={() => eliminarVideo(video.id)}
                    className="video__eliminar"
                  >
                    <BsTrashFill />
                  </button>
                </ContainerAcciones>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
      <Link to="/video/agregar" className="video__agregar">
        Agregar video
      </Link>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    margin-bottom: 10px;
    text-align: center;
  }

  .video__table-container {
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
  }

  .video__agregar {
    font-size: 18px;
    font-weight: 700;
    margin-top: 32px;
    padding: 14px 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .video__agregar {
    color: var(--color-black-ultra-dark);
    background: var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
  }

  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    /* border: 1px solid var(--color-black-ultra-dark); */
    padding: 8px;
  }

  tr {
    background-color: var(--color-black-light);
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--color-black-medium);
    color: var(--color-white);
  }
`;

const ContainerAcciones = styled.td`
  min-width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .video__editar,
  .video__eliminar {
    font-size: 16px;
    padding: 8px;
    color: var(--color-secondary);
    background: var(--color-black-ultra-dark);
    border: 2px solid var(--color-secondary);
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      color: var(--color-secondary);
      border: 2px solid var(--color-secondary);
      background: var(--color-black-medium);
    }
  }
`;

ListVideos.propTypes = {
  videosUse: PropTypes.array,
  eliminarVideo: PropTypes.func,
};
