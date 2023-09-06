import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//React Hook Form
import { useForm } from "react-hook-form";

//Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import { validarNombre, validarApellido, validarTelefono } from "./DatosPersonales/validaciones";
import { validarInput } from "./DatosEntrega/validaciones";

const Form = () => {

  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  const onSubmit = (e, step, pasos) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    if (newStep === 3) {
      console.log("Enviar datos al backend", pasos);
    }
  };

  const handleChange = (element, position, currentStep, validator, pasos) => {
    const value = element.target.value;
    const valid = validator(value);
    const copyPasos = { ...pasos };
    copyPasos[currentStep].inputs[position].value = value;
    copyPasos[currentStep].inputs[position].valid = valid;

    setPasos(copyPasos);
  };

  const { register, handleSubmit, watch } = useForm();

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresa un correo electrónico válido.",
          validator: validarEmail,
          register: {
            ...register("email", {
              required: true,
            })
          }
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20.",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    1: {
      inputs: [
        {
          label: "Nombre",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres y máximo 30 caracteres.",
          validator: validarNombre,
        },
        {
          label: "Apellidos",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres y máximo 30 caracteres.",
          validator: validarApellido,
        },
        {
          label: "Número telefonico",
          type: "number",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 8 digitos y máximo 14 digitos.",
          validator: validarTelefono,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    2: {
      inputs: [
        {
          label: "Direccion",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarInput,
        },
        {
          label: "Ciudad",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarInput,
        },
        {
          label: "Estado/Provincia",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarInput,
        },
      ],
      buttonText: "Crear cuenta",
      onSubmit,
    },
  };

  useEffect(() => {
    setPasos(stepsFlow);
    // eslint-disable-next-line
  }, []);

  console.log(pasos[step]);
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
        {step < 3 && <Stepper step={step} />}
        {step < 3 && pasos[step] && (
          <Step data={pasos[step]} step={step} pasos={pasos} />
        )}
        {step === 3 && <Complete />}
        <pre>{JSON.stringify(watch("email"), null, 2)}</pre>
      </FormSpace>
    </Box>
  );
};

export default Form;
