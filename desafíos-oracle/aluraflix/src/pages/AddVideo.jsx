import { useState } from "react";
import styled from "styled-components";
import Formulario from "../components/Formulario";
import { v4 as uuid } from "uuid";
import { formaciones } from "../assets/data/formaciones";

export default function AddVideo() {
  const [colaboradores, actualizarColaboradores] = useState([
    {
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
    },
  ]);

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  return (
    <StyledMain>
      <h1>Agregar Video</h1>
      <Formulario
        equipos={formaciones.map((equipo) => equipo.name)}
        registrarColaborador={registrarColaborador}
      />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
  }
`;
