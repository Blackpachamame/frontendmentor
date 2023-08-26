import { useState } from "react";
import styled from "styled-components";
import { Icono, Box, Btn, Saldo, Detalle, IconoTema } from "../UI";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

const IconoSaldo = styled(IconoTema)`
  margin-left: 5px;
`;

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };
  let clase = "";
  // eslint-disable-next-line no-unused-vars
  {
    toggleState ? (clase = "visible") : (clase = "oculto");
  }

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0", height: "111px" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          Saldo disponible
          <IconoSaldo src={dinero} alt="Icono de saldo" />
        </span>
        <Saldo className={clase}>
          <Detalle>$</Detalle> 8,621.50
        </Saldo>
      </div>

      <Btn onClick={toggleHandler}>
        <Icono src={toggleState ? privado : ojo} alt="Privacidad de saldo" />
      </Btn>
    </Box>
  );
};

export default Account;
