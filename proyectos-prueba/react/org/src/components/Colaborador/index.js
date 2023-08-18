import "./Colaborador.css";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo } = props.datos;
    const { colorPrimario } = props;
    return (
        <div className="colaborador">
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