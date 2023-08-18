import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);

  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Frontend",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysrm.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorSecundario: "#D9F7E9",
      colorPrimario: "#57C278",
    },
    {
      titulo: "Frontend",
      colorSecundario: "#E8F8FF",
      colorPrimario: "#82CFFA",
    },
    {
      titulo: "Data Science",
      colorSecundario: "#F0F8E2",
      colorPrimario: "#A6D157",
    },
    {
      titulo: "Devops",
      colorSecundario: "#FDE7E8",
      colorPrimario: "#E06B69",
    },
    {
      titulo: "UX y Diseño",
      colorSecundario: "#FAE9F5",
      colorPrimario: "#DB6EBF",
    },
    {
      titulo: "Móvil",
      colorSecundario: "#FFF5D9",
      colorPrimario: "#FFBA05",
    },
    {
      titulo: "Innovación y Gestión",
      colorSecundario: "#FFEEDF",
      colorPrimario: "#FF8A29",
    },
  ];

  return (
    <div>
      <Header />
      {
        mostrarForm && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />)
      }

      <Footer />
    </div>
  );
}

export default App;
