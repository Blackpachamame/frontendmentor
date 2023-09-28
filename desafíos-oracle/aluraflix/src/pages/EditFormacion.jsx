import PropTypes from "prop-types";
import styled from "styled-components";
import Formulario from "../components/Formulario";

export default function EditFormacion({
  videosUse,
  formaciones,
  actualizarVideo,
  actualizarFormacion,
}) {
  return (
    <StyledMain>
      <h1>Editar Formacion</h1>
      <Formulario
        formaciones={formaciones}
        actualizarVideo={actualizarVideo}
        datos={videosUse}
        actualizarFormacion={actualizarFormacion}
      />
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
  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
  }
`;

EditFormacion.propTypes = {
  videosUse: PropTypes.array,
  formaciones: PropTypes.array,
  actualizarVideo: PropTypes.func,
  actualizarFormacion: PropTypes.func,
};
