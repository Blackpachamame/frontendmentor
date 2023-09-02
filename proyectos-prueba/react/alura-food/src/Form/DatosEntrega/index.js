import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {

  const [address, setAddress] = useState({ value: '', valid: null });
  const [city, setCity] = useState({ value: '', valid: null });
  const [province, setProvince] = useState({ value: '', valid: null });

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (address.valid && city.valid && province.valid) {
          console.log("Se avanzó al siguiente formulario");
          updateStep(3);
        } else {
          console.log("Error en los datos ingresados");
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={address.valid === false}
        helperText={
          address.valid === false && "Ingrese al menos 4 caracteres."
        }
        value={address.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setAddress({ value, valid });
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={city.valid === false}
        helperText={
          city.valid === false && "Ingrese al menos 4 caracteres."
        }
        value={city.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setCity({ value, valid });
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={province.valid === false}
        helperText={
          province.valid === false && "Ingrese al menos 4 caracteres."
        }
        value={province.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setProvince({ value, valid });
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
