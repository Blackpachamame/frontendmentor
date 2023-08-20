import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = (props) => {
    const { nombre, puesto, foto, fav, id } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;
    return (
        <div className="colaborador">
            <AiFillCloseCircle className="btnEliminar" onClick={() => eliminarColaborador(id)} />
            <header className="colaborador__header" style={{ backgroundColor: colorPrimario }}>
                <figure>
                    <img src={foto} alt={nombre} />
                </figure>
            </header>
            <div className="colaborador__body">
                <div className="colaborador__info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                </div>
                {fav ? <AiFillHeart className="favorito" color="red" onClick={() => like(id)} /> : <AiOutlineHeart className="favorito" onClick={() => like(id)} />}
            </div>
        </div >
    );
}

export default Colaborador;