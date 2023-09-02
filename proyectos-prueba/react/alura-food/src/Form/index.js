import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {

  const [step, setStep] = useState(0);

  const updateStep = (step) => {
    setStep(step);
  }

  const steps = {
    0: <DatosPersonales updateStep={updateStep} />,
    1: <DatosUsuario updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {(step < 3) && <Stepper step={step} />}
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
