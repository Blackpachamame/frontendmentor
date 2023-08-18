import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id } = props.datos;
    const { colorPrimario, eliminarColaborador } = props;
    return (
        <div className="colaborador">
            <AiFillCloseCircle className="btnEliminar" onClick={() => eliminarColaborador(id)} />
            <header className="encabezado" style={{ backgroundColor: colorPrimario }}>
                <figure>
                    <img src={foto} alt={nombre} />
                </figure>
            </header>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div >
    );
}

export default Colaborador;