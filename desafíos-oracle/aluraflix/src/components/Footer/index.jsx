import styled from "styled-components";
import logo from "../../assets/images/logo/logoAlura.svg";
import logoCircle from "../../assets/images/logo/logoAluraCircle.svg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="textFooter">Blackpachamame@2023</div>
      <div className="containerLogo">
        <img className="logoCircle" src={logoCircle} alt="" />
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="redes">
        <a
          href="https://github.com/Blackpachamame"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/marcos-travaglini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--color-black-ultra-dark);
  padding: 16px 36px;
  border-top: solid 2px var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  .textFooter {
    width: 250px;
    font-family: var(--ff-title);
  }
  .containerLogo {
    position: relative;
  }
  .logoCircle {
    width: 80px;
    height: 80px;
    animation: rotate 30s infinite;
  }
  .logo {
    width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .redes {
    width: 250px;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .redes {
      justify-content: center;
    }
  }
  @media (max-width: 425px) {
    padding: 16px;
  }
  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
