import styled from "styled-components";

const StyledQuote = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  margin-bottom: 24px;
  @media (min-width: 600px) {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;

export default function Quote() {
  return (
    <StyledQuote>
      "It is easy to sit up and take notice, what's difficult is getting up and
      taking action."
    </StyledQuote>
  );
}
