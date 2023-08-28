import styled from "styled-components";
import Advice from "../Advice";
import Cite from "../Cite";

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: 342px;
  height: 315px;
  margin: 16px;
  padding: 44px;
  text-align: center;
  border-radius: 15px;
  @media (min-width: 600px) {
    width: 540px;
    height: 332px;
  }
`;
// 540x332
const ContainerBox = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export default function Box() {
  return (
    <ContainerBox>
      <StyledBox>
        <Advice />
        <Cite />
      </StyledBox>
    </ContainerBox>
  );
}
