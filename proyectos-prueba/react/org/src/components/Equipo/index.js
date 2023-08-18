import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario } = props.datos

    const bcolor = { backgroundColor: colorSecundario };
    const border = { borderColor: colorPrimario };

    return <section className="equipo" style={bcolor}>
        <h3 style={border}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo