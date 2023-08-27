import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

export default function FormSingUp({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);

  const [errors, setErrors] = useState({
    name: {
      error: false,
    },
    lastName: {
      error: false,
    },
    email: {
      error: false,
    },
  });

  function validaciones(nombre) {
    if (nombre.length >= 3) {
      return {
        name: { error: false, message: " " },
      };
    } else {
      return {
        name: { error: true, message: "Deben ser al menos 3 caracteres" },
      };
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          name,
          lastName,
          email,
          prom,
          nov,
        });
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <TextField
          id="name"
          name="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={errors.name.error}
          helperText={errors.name.error ? errors.name.message : " "}
          onBlur={(e) => {
            setErrors(validaciones(e.target.value));
          }}
          required
        />
        <TextField
          id="lastName"
          label="Apellidos"
          variant="outlined"
          fullWidth
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          error={errors.name.error}
          helperText={errors.name.error ? errors.name.message : " "}
          onBlur={(e) => {
            setErrors(validaciones(e.target.value));
          }}
          required
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={errors.name.error}
          helperText={errors.name.error ? errors.name.message : " "}
          onBlur={(e) => {
            setErrors(validaciones(e.target.value));
          }}
          required
        />
      </Stack>
      <FormGroup row sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <FormControlLabel
          control={
            <Switch
              checked={prom}
              onChange={(e) => setProm(e.target.checked)}
            />
          }
          label="Promociones"
          value={prom}
        />
        <FormControlLabel
          control={
            <Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />
          }
          label="Novedades"
          value={nov}
        />
      </FormGroup>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button variant="contained" type="submit">
          Registrarse
        </Button>
      </Box>
    </form>
  );
}
