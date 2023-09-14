import { useState } from "react";
import styled from "styled-components";
import { BsFillHouseDoorFill, BsPlusLg, BsFillStarFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Perfil from "./Perfil";
import Busqueda from "./Busqueda";

const StyledHeader = styled.header`
  transition: transform 0.3s ease;
`;

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 16px 36px;
  @media (max-width: 425px) {
    padding: 16px;
  }
`;

const StyledNavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledUnorderedList = styled.ul`
  display: none;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

const StyledUnorderedListResponsive = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledToggle = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledDropdown = styled.ul`
  width: 180px;
  margin-top: 12px;
  padding: 6px 48px 6px 16px;
  background-color: var(--color-black-medium);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  position: absolute;
  z-index: 1;
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const mostrarBarraBusqueda = () => {
    setToggleSearch(!toggleSearch);
  };

  const menu = [
    {
      name: "Home",
      icon: BsFillHouseDoorFill,
    },
    {
      name: "Lista",
      icon: BsPlusLg,
    },
    {
      name: "Favoritos",
      icon: BsFillStarFill,
    },
  ];

  return (
    <StyledHeader className={toggleSearch ? "header__nav--busca--visible" : ""}>
      <Busqueda />
      <StyledNavbar>
        <StyledNavLeft>
          <Logo />
          <StyledUnorderedList>
            {menu.map((item) => (
              <HeaderItem
                key={item.name}
                name={item.name}
                Icon={item.icon}
                fontSize={"1em"}
              />
            ))}
          </StyledUnorderedList>
          <StyledUnorderedListResponsive>
            <StyledToggle onClick={() => setToggle(!toggle)}>
              <HeaderItem
                key={"DotsVertical"}
                name={""}
                Icon={HiDotsVertical}
                fontSize={"1.5rem"}
              />
              {toggle ? (
                <StyledDropdown>
                  {menu.map((item) => (
                    <HeaderItem
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                      fontSize={"1rem"}
                    />
                  ))}
                </StyledDropdown>
              ) : null}
            </StyledToggle>
          </StyledUnorderedListResponsive>
        </StyledNavLeft>
        <Perfil mostrarBarraBusqueda={mostrarBarraBusqueda} />
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
