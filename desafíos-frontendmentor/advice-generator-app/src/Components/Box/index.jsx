import { useState } from "react";
import dividerMobile from "../../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import styled from "styled-components";
import TitleAdvice from "../TitleAdvice";
import Quote from "../Quote";
import Button from "../Button";
import { BtnTema } from "../UI";
import SwitcherTema from "../SwitcherTema";

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.body};
  padding: 35px 24px 63px;
  text-align: center;
  border-radius: 15px;
  position: relative;
  @media (min-width: 600px) {
    max-width: 540px;
    padding: 44px 44px 72px;
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

export default function Box({ theme, handleTema }) {
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [numero, setNumero] = useState(117);

  const generarAdvice = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((resp) => resp.json())
      .then((data) => {
        setNumero(data.slip.id);
        setAdvice(data.slip.advice);
      })
      .catch((err) => generarAdvice());
  };

  return (
    <ContainerBox>
      <StyledBox>
        <BtnTema onClick={handleTema}>
          <SwitcherTema theme={theme} />
        </BtnTema>
        <TitleAdvice numero={numero} />
        <Quote advice={advice} />
        <picture>
          <source media="(max-width:600px)" srcSet={dividerMobile} />
          <source media="(min-width:601px)" srcSet={dividerDesktop} />
          <img src="" alt="" style={{ margin: "auto" }} />
        </picture>
        <Button theme={theme} handleClick={generarAdvice} />
      </StyledBox>
    </ContainerBox>
  );
}
