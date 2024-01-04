import styled from "styled-components";

const StyledQuote = styled.q`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  margin-bottom: 24px;
  display: block;
  @media (min-width: 600px) {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;

export default function Quote({ advice }) {
  return <StyledQuote>{advice}</StyledQuote>;
}
