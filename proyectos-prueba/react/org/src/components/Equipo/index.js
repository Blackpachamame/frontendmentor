import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
    const { id, titulo, colorPrimario } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

    const bgcolor = { backgroundColor: colorPrimario + "33" };
    const border = { borderColor: colorPrimario };
    const title = titulo;
    return (<>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={bgcolor}>
                <input
                    type="color"
                    className="inputColor"
                    value={colorPrimario}
                    aria-label={"colorEquipo " + title}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={border}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador) => <Colaborador
                            datos={colaborador}
                            key={colaborador.nombre}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>);
}

export default Equipo