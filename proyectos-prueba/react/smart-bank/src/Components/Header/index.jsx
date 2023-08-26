import logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import { BtnTema, ContainerBtn } from "../UI";
import SwitcherTema from "../SwitcherTema";

const StyledHeader = styled.nav`
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  @media (max-width: 500px) {
    padding: 0px 20px;
  }
  @media (max-width: 375px) {
    padding: 0px 10px;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${({ primary, theme }) =>
    primary === "activado" ? "white" : theme.header};
  background-color: ${({ primary }) =>
    primary === "activado" ? "transparent" : "white"};
`;

const Header = ({ theme, toggleTema }) => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledHeader>
        <Logo src={logo} alt="Logo Smart Bank" />
        <ContainerBtn>
          <div>
            <BtnHeader href="https://google.com">Ayuda</BtnHeader>
            <BtnHeader primary={"activado"} href="https://google.com">
              Salir
            </BtnHeader>
          </div>
          <BtnTema onClick={toggleTema}>
            <SwitcherTema theme={theme} />
          </BtnTema>
        </ContainerBtn>
      </StyledHeader>
    </StyleSheetManager>
  );
};

export default Header;
