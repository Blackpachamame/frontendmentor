import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function FormSingUp({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);

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
        spacing={2}
      >
        <TextField
          id="name"
          name="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          id="lastName"
          label="Apellidos"
          variant="outlined"
          fullWidth
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormGroup>
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
              <Switch
                checked={nov}
                onChange={(e) => setNov(e.target.checked)}
              />
            }
            label="Novedades"
            value={nov}
          />
        </FormGroup>

        <Button variant="contained" type="submit">
          Registrarse
        </Button>
      </Stack>
    </form>
  );
}
