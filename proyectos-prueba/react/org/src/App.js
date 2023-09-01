import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);

  const colaboradoresArreglo = [{
    id: uuid(),
    equipo: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor e Ing. de Software",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "Backend",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de Software",
    fav: false,
  },
  {
    id: uuid(),
    equipo: "Devops",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora e Ing. en Sistemas",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false,
  },
  {
    id: uuid(),
    equipo: "Frontend",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Desarrollador Full Stack",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/RaquelCoimbra.png",
    nombre: "Raquel Coimbra",
    puesto: "Community Manager",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/mauricioalura.png",
    nombre: "Maurício Santiago",
    puesto: "Community Manager",
    fav: false,
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://github.com/estebanvz.png",
    nombre: "Esteban Vilca",
    puesto: "Instructor y Asesor técnico de inteligencia artificial",
    fav: false,
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://github.com/ElProfeAlejo.png",
    nombre: "Alejandro Gamarra",
    puesto: "Instructor y Especialista en Big Data",
    fav: false,
  },
  {
    id: uuid(),
    equipo: "Instructor",
    foto: "https://github.com/Ellen-code.png",
    nombre: "Ellen Pimentel",
    puesto: "Instructora y Desarrolladora Full Stack",
    fav: false,
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "/img/perfil/pazcorrea.jpg",
    nombre: "Paz Correa",
    puesto: "Community Manager",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/Mapinko.png",
    nombre: "Mariana Spinola",
    puesto: "Diseñadora web y Desarrolladora Full Stack",
    fav: true,
  }];

  const [colaboradores, actualizarColaboradores] = useState(getInitialColaboradores);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Instructor",
      colorPrimario: "#57C278",
    },
    {
      id: uuid(),
      titulo: "Frontend",
      colorPrimario: "#82CFFA",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
    },
    {
      id: uuid(),
      titulo: "Backend",
      colorPrimario: "#FFBA05",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores]);

  function getInitialColaboradores() {
    const savedColaboradores = localStorage.getItem("colaboradores");
    return savedColaboradores ? JSON.parse(savedColaboradores) : colaboradoresArreglo;
  }

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  //Registrar equipo
  const crearEquipo = (nuevoEquipo) => {
    //Spread operator
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  //Actualizar favorito
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {
        mostrarForm && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }

      <Footer />
    </div>
  );
}

export default App;
