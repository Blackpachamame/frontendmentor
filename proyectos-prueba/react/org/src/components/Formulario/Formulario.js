import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

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
            nombre,
            puesto,
            foto,
            equipo,
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
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto
                    label="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <CampoTexto
                    label="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <CampoTexto
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
                <h2>Rellena el formulario para crear el equipo.</h2>
                <CampoTexto
                    label="Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <CampoTexto
                    label="Color"
                    placeholder="Ingresar color"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                />
                <Boton>Crear</Boton>
            </form>
        </section>
    );
}

export default Formulario