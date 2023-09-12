import styled from "styled-components";
import logo from "../../assets/logoAlura.svg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const StyledLogoContainer = styled.div`
  color: #2bdefd;
  display: flex;
  gap: 5px;
`;

const StyledLogo = styled.img`
  width: 20px;
`;

export default function Logo() {
  return (
    <StyledLogoContainer>
      <StyledLogo src={logo} alt="Logo Alura" />
      <MdOutlineSlowMotionVideo />
    </StyledLogoContainer>
  );
}
