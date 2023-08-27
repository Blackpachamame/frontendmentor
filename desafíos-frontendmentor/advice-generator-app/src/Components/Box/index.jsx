import styled from "styled-components";

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw 25px;
  @media (max-width: 500px) {
    padding: 0px 20px;
  }
  @media (max-width: 375px) {
    padding: 0px 10px;
  }
`;

export default function Box() {
  return <StyledBox></StyledBox>;
}
