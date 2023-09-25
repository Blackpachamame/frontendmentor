import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Campo from "./Campo";
import ListaOpciones from "./ListOptions";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ equipos, registrarColaborador }) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    let datosAEnviar = {
      id: uuidv4(),
      equipo,
      foto,
      nombre,
      puesto,
      fav: false,
    };
    registrarColaborador(datosAEnviar);
  };

  return (
    <ContainerForm>
      <form onSubmit={manejarEnvio}>
        <Campo
          label="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          label="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          label="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={equipos}
        />
        <button className="boton">Agregar</button>
      </form>
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
  equipos: PropTypes.array,
  registrarColaborador: PropTypes.func,
};
