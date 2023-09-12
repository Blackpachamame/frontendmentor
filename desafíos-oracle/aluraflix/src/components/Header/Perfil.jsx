import { useState } from "react";
import styled from "styled-components";

const StyledPerfil = styled.img`
  width: 50px;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  z-index: 10;
`;

const StyledDropdown = styled.div`
  height: 180px;
  text-align: end;
  padding-block: 6px;
  background-color: var(--color-black-medium);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 40px;
  right: 40px;
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

export default function Perfil() {
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
    <div onClick={() => setToggle(!toggle)}>
      <StyledPerfil src="https://static.vecteezy.com/system/resources/previews/004/819/323/non_2x/hipster-avatar-icon-of-bearded-man-in-glasses-vector.jpg" />
      {toggle ? (
        <StyledDropdown>
          {menu.map((item) => (
            <StyledPerfilItem key={item.name}>{item.name}</StyledPerfilItem>
          ))}
        </StyledDropdown>
      ) : null}
    </div>
  );
}
