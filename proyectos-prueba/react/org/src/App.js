import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
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
  ]

  return (
    <div>
      <Header />
      {/* {mostrarForm === true ? <Formulario /> : <></>} */}
      {mostrarForm && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }
    </div>
  );
}

export default App;
