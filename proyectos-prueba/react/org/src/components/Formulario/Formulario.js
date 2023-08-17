import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const manejarEnvio = (evento) => {
    evento.preventDefault()
    console.log("hola");
}

const Formulario = () => (
    <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto label="Nombre" placeholder="Ingresar nombre" required />
            <CampoTexto label="Puesto" placeholder="Ingresar puesto" required />
            <CampoTexto label="Foto" placeholder="Ingresar enlace de foto" required />
            <ListaOpciones />
            <Boton>Crear</Boton>
        </form>
    </section>);

export default Formulario