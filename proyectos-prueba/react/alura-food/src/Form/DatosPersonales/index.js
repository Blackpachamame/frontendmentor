import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [name, setName] = useState({ value: '', valid: null });
  const [lastName, setLastName] = useState({ value: '', valid: null });
  const [phone, setPhone] = useState({ value: '', valid: null });

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
        if (name.valid && lastName.valid && phone.valid) {
          console.log("Se avanzó al siguiente formulario");
          updateStep(2);
        } else {
          console.log("Error en los datos ingresados");
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false}
        helperText={
          name.valid === false && "Ingrese al menos 4 caracteres y máximo 30 caracteres."
        }
        value={name.value}
        onChange={(input) => {
          const name = input.target.value;
          const valido = validarNombre(name);
          setName({ value: name, valid: valido });
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={lastName.valid === false}
        helperText={
          lastName.valid === false && "Ingrese al menos 4 caracteres y máximo 30 caracteres."
        }
        value={lastName.value}
        onChange={(input) => {
          const lastName = input.target.value;
          const valido = validarApellido(lastName);
          setLastName({ value: lastName, valid: valido });
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error={phone.valid === false}
        helperText={
          phone.valid === false && "Ingresa un teléfono válido."
        }
        value={phone.value}
        onChange={(input) => {
          const phone = input.target.value;
          const valido = validarTelefono(phone);
          setPhone({ value: phone, valid: valido });
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
