import "./Formulario.css"
import CampoTexto from "../CampoTexto"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto label="Nombre" placeholder="Ingresar nombre" />
            <CampoTexto label="Puesto" placeholder="Ingresar puesto" />
            <CampoTexto label="Foto" placeholder="Ingresar enlace de foto" />
        </form>
    </section>
}

export default Formulario