import { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const StyledNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledContainerPerfil = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
`;

const StyledPerfil = styled.img`
  width: 44px;
  border-radius: 100%;
  cursor: pointer;
`;

const StyledDropdown = styled.ul`
  width: 160px;
  text-align: end;
  padding-block: 6px;
  background-color: var(--color-black-medium);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  position: absolute;
  top: 60px;
  right: 0;
  @media (max-width: 425px) {
    right: 16px;
  }
`;

const StyledPerfilItem = styled.li`
  font-family: var(--ff-title);
  font-weight: 600;
  font-size: 15px;
  color: white;
  margin-block: 3px;
  padding-inline: 16px;
  padding-block: 10px;
  list-style: none;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #293343;
  }
`;

// eslint-disable-next-line react/prop-types
export default function Perfil({ mostrarBarraBusqueda }) {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Nuevo vídeo",
    },
    {
      name: "Nueva Categoría",
    },
    {
      name: "Logout",
    },
  ];

  return (
    <StyledNavRight>
      <BsSearch onClick={mostrarBarraBusqueda} style={{ cursor: "pointer" }} />
      <StyledContainerPerfil onClick={() => setToggle(!toggle)}>
        <StyledPerfil src="https://static.vecteezy.com/system/resources/previews/004/819/323/non_2x/hipster-avatar-icon-of-bearded-man-in-glasses-vector.jpg" />
        {toggle ? (
          <StyledDropdown>
            {menu.map((item) => (
              <StyledPerfilItem key={item.name}>{item.name}</StyledPerfilItem>
            ))}
          </StyledDropdown>
        ) : null}
      </StyledContainerPerfil>
    </StyledNavRight>
  );
}
