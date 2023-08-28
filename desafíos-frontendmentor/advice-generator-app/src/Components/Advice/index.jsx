import styled from "styled-components";

const StyledAdvice = styled.h3`
  color: ${({ theme }) => theme.title};
  font-size: 10px;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 4px;
  margin-right: -4px;
  margin-bottom: 34px;
  @media (min-width: 600px) {
    font-size: 12px;
    margin-bottom: 36px;
  }
`;

export default function Advice() {
  return <StyledAdvice>Advice 1117</StyledAdvice>;
}
