import PropTypes from "prop-types";
import styled from "styled-components";

const ListaOpciones = ({ valor, actualizarEquipo, equipos }) => {
  const manejarCambio = (e) => {
    actualizarEquipo(e.target.value);
  };

  return (
    <StyledLista>
      <label htmlFor="Equipo">Equipos</label>
      <select
        id="Equipo"
        name="Equipo"
        value={valor}
        onChange={manejarCambio}
        required
      >
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </StyledLista>
  );
};

export default ListaOpciones;

const StyledLista = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 3px;
  }

  select {
    height: 60px;
    font-family: var(--ff-body);
    font-size: 16px;
    color: var(--color-white);
    background-color: var(--color-black-light);
    padding-inline: 20px;
    border: none;
    border-bottom: 2px solid var(--color-gray-medium);
    border-radius: 5px 5px 0 0;
    appearance: none;
    transition: all 0.5s ease;
    background-image: url("../src/assets/images/logo/arrow_down.svg");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    &:focus {
      border-bottom: 2px solid var(--color-secondary);
      background-image: url("../src/assets/images/logo/arrow_down_focus.svg");
      outline: 0;
    }
    &:required:invalid {
      color: #a4a4a4;
    }
  }
  option {
    color: var(--color-white);
  }
`;

ListaOpciones.propTypes = {
  valor: PropTypes.string,
  actualizarEquipo: PropTypes.func,
  equipos: PropTypes.array,
};
