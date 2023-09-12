import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

const StyledBusqueda = styled.div`
  position: relative;
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

export default function Busqueda() {
  return (
    <StyledBusqueda>
      <StyledBusquedaForm>
        <StyledBusquedaInput placeholder="O que você quer aprender?" />
        <StyledBusquedaBtn>
          <HiMagnifyingGlass style={{ fontSize: "1.5rem" }} />
        </StyledBusquedaBtn>
      </StyledBusquedaForm>
    </StyledBusqueda>
  );
}
