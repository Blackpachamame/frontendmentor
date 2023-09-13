import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const StyledBusqueda = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
`;

const StyledBusquedaForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 64px;
  border-bottom: solid 1.28px #27a6bd;
  padding: 16px 36px;
  @media (max-width: 425px) {
    padding: 16px;
  }
`;

const StyledBusquedaInput = styled.input`
  margin: 0;
  border: 0;
  font-size: 0.875rem;
  height: 100%;
  width: 100%;
  color: #fff;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: #27a6bd;
  }
`;

const StyledBusquedaBtn = styled.button`
  color: var(--color-gray-light);
  background-color: transparent;
  border: 0;
`;

// eslint-disable-next-line react/prop-types
export default function Busqueda({ position, top }) {
  return (
    <StyledBusqueda style={{ position: position, top: top }}>
      <StyledBusquedaForm>
        <StyledBusquedaInput name="search" placeholder="¿Qué buscas?" />
        <StyledBusquedaBtn>
          <BsSearch style={{ fontSize: "1.5rem" }} />
        </StyledBusquedaBtn>
      </StyledBusquedaForm>
    </StyledBusqueda>
  );
}
