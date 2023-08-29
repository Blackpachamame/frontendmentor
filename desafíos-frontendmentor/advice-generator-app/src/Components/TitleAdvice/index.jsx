import styled from "styled-components";

const StyledAdvice = styled.h3`
  color: ${({ theme }) => theme.title};
  font-size: 10px;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 4px;
  margin-right: -4px;
  margin-bottom: 25px;
  @media (min-width: 600px) {
    font-size: 12px;
  }
`;

export default function TitleAdvice({ numero }) {
  return <StyledAdvice>Advice #{numero}</StyledAdvice>;
}
