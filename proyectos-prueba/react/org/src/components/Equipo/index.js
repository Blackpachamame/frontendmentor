import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;

    const bcolor = { backgroundColor: hexToRgba(colorPrimario, 0.2) };
    const border = { borderColor: colorPrimario };

    return (<>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={bcolor}>
                <input
                    type="color"
                    className="inputColor"
                    value={colorSecundario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, titulo)
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
                        />)
                    }
                </div>
            </section>
        }
    </>);
}

export default Equipo