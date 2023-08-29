import dividerMobile from "../../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import styled from "styled-components";
import Advice from "../Advice";
import Quote from "../Quote";
import Button from "../Button";

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.body};
  /* width: 342px;
  height: 315px;
  margin: 16px; */
  padding: 35px 24px 63px;
  text-align: center;
  border-radius: 15px;
  position: relative;
  @media (min-width: 600px) {
    width: 540px;
    height: 332px;
    padding: 44px 44px 70px;
    webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
  }
`;

const ContainerBox = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.background};
`;

const DividerMobile = styled.img`
  @media (min-width: 600px) {
    display: none;
  }
`;
const DividerDesktop = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

export default function Box() {
  return (
    <ContainerBox>
      <StyledBox>
        <Advice />
        <Quote />
        <DividerMobile src={dividerMobile} alt="" />
        <DividerDesktop src={dividerDesktop} alt="" />
        <Button />
      </StyledBox>
    </ContainerBox>
  );
}
