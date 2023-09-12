import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logoAlura.svg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    padding: 0px 20px;
  }
  @media (max-width: 375px) {
    padding: 0px 10px;
  }
`;

const StyledNavbar = styled.nav`
  padding: 16px 36px;
  display: flex;
  align-items: center;
  gap: 32px;
`;

const LogoContainer = styled.div`
  color: #2bdefd;
  display: flex;
  gap: 5px;
`;

const Logo = styled.img`
  width: 20px;
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
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watch List",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];

  return (
    <StyledHeader>
      <StyledNavbar>
        <LogoContainer>
          <Logo src={logo} alt="Logo Alura" />
          <MdOutlineSlowMotionVideo />
        </LogoContainer>

        <StyledUnorderedList>
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
          <StyledToggle
            className="md:hidden"
            onClick={() => setToggle(!toggle)}
          >
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
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
