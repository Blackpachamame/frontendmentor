import styled from "styled-components";
import logo from "../../assets/logoAlura.svg";
import logoText from "../../assets/logoAluraCircle.svg";

const StyledHeader = styled.nav`
  background-color: var(--color-black-dark);
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 100px;
  align-items: center;
  @media (max-width: 500px) {
    padding: 0px 20px;
  }
  @media (max-width: 375px) {
    padding: 0px 10px;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: block;
`;

const LogoCircle = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  z-index: 55;
  top: 20px;
  /* right: 25px; */
  animation: 50s linear 0s infinite normal none running loading;
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
`;

const Logo = styled.img`
  display: block;
  /* height: 30px; */
  width: 26px;
  position: relative;
  z-index: 50;
  top: -50px;
  right: -38px;
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

const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <LogoCircle src={logoText} alt="Logo Smart Bank" />
        <Logo src={logo} alt="Logo Smart Bank" />
      </LogoContainer>
      <ContainerBtn>
        <div>
          <BtnHeader href="https://google.com">Ayuda</BtnHeader>
          <BtnHeader primary={"activado"} href="https://google.com">
            Salir
          </BtnHeader>
        </div>
      </ContainerBtn>
    </StyledHeader>
  );
};

export default Header;
