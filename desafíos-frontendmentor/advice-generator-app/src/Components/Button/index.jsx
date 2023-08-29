import icon from "../../assets/images/icon-dice.svg";
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
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default function Button() {
  return (
    <StyledButton>
      <StyledIcon src={icon} alt="" />
    </StyledButton>
  );
}
