import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario } = props.datos;
    const { colaboradores } = props;

    const bcolor = { backgroundColor: colorSecundario };
    const border = { borderColor: colorPrimario };

    return (<>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={bcolor}>
                <h3 style={border}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador) => <Colaborador
                            datos={colaborador}
                            key={colaborador.nombre}
                            colorPrimario={colorPrimario}
                        />)
                    }
                </div>
            </section>
        }
    </>);
}

export default Equipo