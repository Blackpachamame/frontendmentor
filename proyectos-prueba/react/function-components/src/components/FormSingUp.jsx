import Button from "@mui/material/Button";

export default function FormSingUp() {
  return (
    <form>
      <label>
        Nombre
        <input type="text" name="nombre" id="nombre" />
      </label>
      <label>
        Apellido
        <input type="text" name="apellido" id="apellido" />
      </label>
      <label>
        Correo Electronico
        <input type="email" name="email" id="email" autoComplete="off" />
      </label>
      <label>
        Promociones
        <input type="checkbox" name="promociones" id="promociones" />
      </label>
      <label>
        Novedades
        <input type="checkbox" name="novedades" id="novedades" />
      </label>

      <Button variant="contained">Registrarse</Button>
    </form>
  );
}
