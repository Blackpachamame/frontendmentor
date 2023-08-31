import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            id: uuidv4(),
            equipo,
            foto,
            nombre,
            puesto,
            fav: false,
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h3>Rellena el formulario para crear el colaborador.</h3>
                <Campo
                    label="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <Campo
                    label="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <Campo
                    label="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h3>Rellena el formulario para crear el equipo.</h3>
                <Campo
                    label="Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <Campo
                    label="Color"
                    placeholder="Ingresar color"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton>Crear</Boton>
            </form>
        </section>
    );
}

export default Formulario