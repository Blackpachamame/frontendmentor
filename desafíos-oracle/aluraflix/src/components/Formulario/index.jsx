import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Campo from "./Campo";
import ListaOpciones from "./ListOptions";
import Modal from "../Modal";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ formaciones, agregarVideo, actualizarVideo, datos }) => {
  const [urlVideo, actualizarUrlVideo] = useState(datos ? datos.urlVideo : "");
  const [imgVideo, actualizarImgVideo] = useState(datos ? datos.imgVideo : "");
  const [title, actualizarTitle] = useState(datos ? datos.title : "");
  const [descripcion, actualizarDescripcion] = useState(
    datos ? datos.descripcion : ""
  );
  const [formacion, actualizarFormacion] = useState(
    datos ? datos.formacion : ""
  );
  const [openModal, setOpenModal] = useState(false);

  const handleCrear = (evento) => {
    evento.preventDefault();

    let datosAEnviar = {
      id: uuidv4(),
      urlVideo,
      imgVideo,
      formacion,
      title,
      descripcion,
    };

    agregarVideo(datosAEnviar);
  };

  const handleEditar = (evento) => {
    evento.preventDefault();

    let datosAEditar = {
      id: datos.id,
      urlVideo,
      imgVideo,
      formacion,
      title,
      descripcion,
    };

    actualizarVideo(datosAEditar);
  };

  return (
    <ContainerForm>
      <form onSubmit={datos ? handleEditar : handleCrear}>
        <Campo
          label="Url Video"
          placeholder="Ingresar url del video"
          required
          valor={urlVideo}
          actualizarValor={actualizarUrlVideo}
        />
        <Campo
          label="Url Imagen"
          placeholder="Ingresar url de la imagen del video"
          required
          valor={imgVideo}
          actualizarValor={actualizarImgVideo}
        />
        <Campo
          label="Título"
          placeholder="Ingresar título"
          required
          valor={title}
          actualizarValor={actualizarTitle}
        />
        <Campo
          label="Descripción"
          placeholder="Ingresar descripción"
          required
          valor={descripcion}
          actualizarValor={actualizarDescripcion}
          type="textarea"
        />
        <ListaOpciones
          valor={formacion}
          actualizarFormacion={actualizarFormacion}
          formaciones={formaciones}
        />
        <button className="boton" onClick={() => setOpenModal(true)}>
          {datos ? "Editar" : "Agregar"}
        </button>
      </form>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        text={
          datos
            ? "Datos editados correctamente"
            : "Video agregado correctamente"
        }
        editado={datos ? true : false}
      />
    </ContainerForm>
  );
};

export default Formulario;

const ContainerForm = styled.section`
  max-width: 600px;
  width: 100%;
  margin-bottom: 32px;
  form {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 32px;
    border: 2px solid var(--color-black-medium);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    margin-bottom: 16px;
  }

  .boton {
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    padding: 14px 22px;
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    background: var(--color-secondary);
    &:hover {
      border: 2px solid var(--color-primary);
      background: var(--color-primary);
    }
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 375px) {
    form {
      background-color: transparent;
      padding: 16px;
      border: none;
      border-radius: 0;
    }
  }
`;

Formulario.propTypes = {
  formaciones: PropTypes.array,
  agregarVideo: PropTypes.func,
  actualizarVideo: PropTypes.func,
  datos: PropTypes.object,
};
