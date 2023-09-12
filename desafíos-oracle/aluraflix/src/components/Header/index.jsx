import { useState } from "react";
import styled from "styled-components";
import { HiMagnifyingGlass, HiStar } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Perfil from "./Perfil";
import Busqueda from "./Busqueda";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
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

const StyledDropdown = styled.div`
  width: 100%;
  margin-top: 12px;
  padding: 6px 48px 6px 16px;
  background-color: var(--color-black-medium);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  position: absolute;
  right: 0;
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const menu = [
    {
      name: "Búsqueda",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Lista",
      icon: HiPlus,
    },
    {
      name: "Favoritos",
      icon: HiStar,
    },
  ];

  return (
    <StyledHeader>
      {toggleSearch ? <Busqueda /> : null}
      <StyledNavbar>
        <StyledNavLeft>
          <Logo />
          <StyledUnorderedList
            onClick={() => {
              setToggleSearch(!toggleSearch);
            }}
          >
            {menu.map((item) => (
              <HeaderItem
                key={item.name}
                name={item.name}
                Icon={item.icon}
                fontSize={"1rem"}
              />
            ))}
          </StyledUnorderedList>
          <StyledUnorderedListResponsive>
            {menu.map(
              (item, index) =>
                index < 3 && (
                  <HeaderItem
                    key={item.name}
                    name={""}
                    Icon={item.icon}
                    fontSize={"1.5rem"}
                  />
                )
            )}
            <StyledToggle onClick={() => setToggle(!toggle)}>
              <HeaderItem
                key={"DotsVertical"}
                name={""}
                Icon={HiDotsVertical}
                fontSize={"1.5rem"}
              />
              {toggle ? (
                <StyledDropdown>
                  {menu.map(
                    (item, index) =>
                      index > 2 && (
                        <HeaderItem
                          key={item.name}
                          name={item.name}
                          Icon={item.icon}
                          fontSize={"1.5rem"}
                        />
                      )
                  )}
                </StyledDropdown>
              ) : null}
            </StyledToggle>
          </StyledUnorderedListResponsive>
        </StyledNavLeft>
        <Perfil />
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
