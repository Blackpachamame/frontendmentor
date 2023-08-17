import "./CampoTexto.css"
const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`;
    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value);
    };

    return <div className="campo-texto">
        <label>{props.label}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto