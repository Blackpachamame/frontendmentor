import "./ListaOpciones.css"

const equipos = [
    "Programación",
    "Frontend",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
]

const ListaOpciones = () => {
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {/* <option>Seleccionar equipo</option> */}
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones