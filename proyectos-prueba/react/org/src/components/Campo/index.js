import "./Campo.css";
const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    //Destructuración
    const { type = "text" } = props;

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value);
    };

    return <div className={`campo campo-${type}`}>
        <label htmlFor={props.label}>{props.label}</label>
        <input
            id={props.label}
            name={props.label}
            placeholder={placeholderModificado}
            required={props.required}
            value={(props.valor === "") && (type === "color") ? "#000000" : props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo