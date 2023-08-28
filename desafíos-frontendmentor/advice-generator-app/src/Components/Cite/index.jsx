import styled from "styled-components";

const StyledCite = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  @media (min-width: 600px) {
    font-size: 28px;
    font-weight: 700;
  }
`;

export default function Cite() {
  return (
    <StyledCite>
      "It is easy to sit up and take notice, what's difficult is getting up and
      taking action."
    </StyledCite>
  );
}
