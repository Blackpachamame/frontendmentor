import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, fav, id } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;
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
                {fav ? <AiFillHeart className="favorito" color="red" onClick={() => like(id)} /> : <AiOutlineHeart className="favorito" onClick={() => like(id)} />}
            </div>
        </div >
    );
}

export default Colaborador;