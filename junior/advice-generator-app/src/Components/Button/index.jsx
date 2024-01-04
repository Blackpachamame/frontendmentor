import icon from "../../assets/images/icon-dice.svg";
import iconLight from "../../assets/images/icon-diceLight.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.title};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -32px;
  right: calc(50% + -32px);
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 0px 0px 30px 5px ${({ theme }) => theme.shadow};
    -webkit-box-shadow: 0px 0px 30px 5px ${({ theme }) => theme.shadow};
    -moz-box-shadow: 0px 0px 30px 5px ${({ theme }) => theme.shadow};
  }
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default function Button({ theme, handleClick }) {
  return (
    <StyledButton aria-label="Cambiar Advice" onClick={handleClick}>
      {!theme ? (
        <StyledIcon src={icon} alt="" />
      ) : (
        <StyledIcon src={iconLight} alt="" />
      )}
    </StyledButton>
  );
}
