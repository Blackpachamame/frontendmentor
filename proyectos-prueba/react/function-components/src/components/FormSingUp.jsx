import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function FormSingUp() {
  return (
    <form>
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
        />
        <TextField
          id="lastName"
          label="Apellidos"
          variant="outlined"
          fullWidth
        />
        <TextField id="email" label="Email" variant="outlined" fullWidth />
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Promociones"
          />
          <FormControlLabel required control={<Switch />} label="Novedades" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>
        <label>
          Promociones
          <input type="checkbox" name="promociones" id="promociones" />
        </label>
        <label>
          Novedades
          <input type="checkbox" name="novedades" id="novedades" />
        </label>

        <Button variant="contained">Registrarse</Button>
      </Stack>
    </form>
  );
}
