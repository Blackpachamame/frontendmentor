import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Video from "./pages/Video";
import AddVideo from "./pages/AddVideo";
import EditVideo from "./pages/EditVideo";
import Error404 from "./pages/Error404";
import { v4 as uuid } from "uuid";

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const mostrarBarraBusqueda = () => {
    setToggleSearch(!toggleSearch);
  };

  const arrayVideos = [
    // Frontend
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=MxlxFhzGRV8",
      imgVideo: "../src/assets/images/video/frontend/front1.webp",
      formacion: "frontend",
      title: "Como aplicar Dark Mode en tu proyecto",
      descripcion:
        "La funcionalidad conocida como Dark Mode está cada vez más popular, sendo encontrada en diversos tipos de aplicaciones, redes sociales, plataformas educacionales o de entretenimiento. En este Alura+, nuestro instructor Harland Lohora, nos enseña a como realizar estas aplicaciones en una página web. ",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=PztCEdIJITY",
      imgVideo: "../src/assets/images/video/frontend/front2.webp",
      formacion: "frontend",
      title: "¿Cuándo usar let, var y const?",
      descripcion:
        "¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      imgVideo: "../src/assets/images/video/frontend/front3.webp",
      formacion: "frontend",
      title: "¿Qué es JavaScript?",
      descripcion:
        "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      imgVideo: "../src/assets/images/video/frontend/front4.webp",
      formacion: "frontend",
      title: "Equipo Front End",
      descripcion:
        "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología? \nEn este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=UuAX5azcvDQ",
      imgVideo: "../src/assets/images/video/frontend/front5.webp",
      formacion: "frontend",
      title: "¿Cómo un desarrollador Front End utiliza el Figma?",
      descripcion:
        "En este Alura+, Genesys, instructora de Alura Latam, nos responde esa pregunta y nos muestra esta conocida herramienta.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=EB4vWLzfVcI",
      imgVideo: "../src/assets/images/video/frontend/front6.webp",
      formacion: "frontend",
      title: "Consejos de CSS FlexBox para comenzar",
      descripcion:
        "En esta nueva edición de Alura + aprenderemos un poco más sobre los primeros pasos para empezar a trabajar con Flexbox en CSS y conoceremos las principales etiquetas y cómo aplicarlas.",
    },
    // Backend
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=Z024LSCMqFk",
      imgVideo: "../src/assets/images/video/backend/back1.webp",
      formacion: "backend",
      title: "Explorando el poder del Back-End en el Desarrollo Web",
      descripcion:
        "Maria Fernanda nos cuenta qué es el backend y con que lenguaje empezar.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      imgVideo: "../src/assets/images/video/backend/back2.webp",
      formacion: "backend",
      title: "Spring Framework. ¿Qué es?",
      descripcion:
        "¿Busca un framework  para utilizar en sus proyectos? ¿Conoce Spring Framework? Spring es el framework más usado de Java. Nos ofrece herramientas que nos permiten crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=EoPvlE85XAQ",
      imgVideo: "../src/assets/images/video/backend/back3.webp",
      formacion: "backend",
      title: "Simplificando tu código en Java: Conoce los enum",
      descripcion:
        "¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código? En este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=GrEO8nZzyZM",
      imgVideo: "../src/assets/images/video/backend/back4.webp",
      formacion: "backend",
      title: "La magia detrás de Java",
      descripcion:
        "Sabemos que el ecosistema de Java es una sopa de letras con varias siglas, y la JVM (Java Virtual Machine) es una de ellas. En este video, nuestra instructora Ellen Pimentel explica su rol y características y es más simple que la magia, es decir, de lo que uno imagina.",
    },
    // Devops
    {
      id: uuid(),
      urlVideo: "https://youtu.be/IQ8-_khQATQ?si=gV1Ar1B6qyBtpfiR",
      imgVideo: "../src/assets/images/video/devops/devops1.webp",
      formacion: "devops",
      title:
        "Lo que necesitas saber para iniciarte en DevOps con Leonardo Sartorello",
      descripcion:
        "En este #HipstersPontoTube el presentador Alberto Souza conversa con Leonardo Sartorello sobre la cultura DevOps y lo que es necesario aprender tanto en estructura como Dev!",
    },
    {
      id: uuid(),
      urlVideo: "https://youtu.be/0jw8RpHuZ-Q?si=vDjFsYbNfwx3WSOp",
      imgVideo: "../src/assets/images/video/devops/devops2.webp",
      formacion: "devops",
      title: "Git Flow vs desarrollo basado en Trunk",
      descripcion:
        "Descubra cuáles son los sistemas de control de versiones de código de desarrollo basados ​​en Git Flow y Trunk, sus diferencias y qué flujo de trabajo es más adecuado para diferentes escenarios de entorno y ciclos de desarrollo para poner su código en producción. \nEn este #AluraMás tendrás una breve discusión con Fernanda sobre los modelos de control de versiones de desarrollo basados ​​en Git Flow y Trunk.",
    },
    {
      id: uuid(),
      urlVideo: "https://youtu.be/Z-4oX6a5Z5s?si=umMRNnPxxaGIhoNF",
      imgVideo: "../src/assets/images/video/devops/devops3.webp",
      formacion: "devops",
      title: "Diferencia entre implementación y lanzamiento",
      descripcion:
        "¡Otro Alura+ para ustedes, muchachos! 🤯💥 \nEn este video, aprenderá sobre la diferencia entre implementación y lanzamiento, así como también aprenderá más sobre indicadores de funciones y cambios paralelos, dos conceptos bien conocidos en el universo DevOps.",
    },
    {
      id: uuid(),
      urlVideo: "https://youtu.be/noRAwzTg5VI?si=UolfFySLWi_8LPoP",
      imgVideo: "../src/assets/images/video/devops/devops4.webp",
      formacion: "devops",
      title: "Garantía de calidad (QA) y entrega continua",
      descripcion:
        "En este Alura+ aprenderás la relación entre Garantía de Calidad (QA) y Entrega Continua. 💻 \nVinícius Dias, instructor de Alura, explica cómo es posible aumentar la calidad de los despliegues y cómo estos dos recursos dependen uno del otro. ¿Aquí vamos? 😉",
    },
    {
      id: uuid(),
      urlVideo: "https://youtu.be/yKnkK4HxW8E?si=cNPfbyaQsiM2No4Z",
      imgVideo: "../src/assets/images/video/devops/devops5.webp",
      formacion: "devops",
      title: "Terraform y máquinas virtuales en Google Cloud",
      descripcion:
        "Hoy aprenderá cómo podemos crear una máquina virtual en Google Cloud Platform usando Terraform y verá las diferencias entre Google Cloud Platform y AWS.",
    },
    {
      id: uuid(),
      urlVideo: "https://youtu.be/jSnLOoGjQ80?si=Uc4S8nCKSjG4xooO",
      imgVideo: "../src/assets/images/video/devops/devops6.webp",
      formacion: "devops",
      title: "¿Qué son los microservicios? (Microservicios)",
      descripcion:
        "Después de todo, ¿qué son los microservicios de los que tanto se habla? Mauricio Linhares y Paulo Silveira hablaron sobre esto y te cuentan sus ventajas ¡y mucho más!",
    },
    // Innovación y Gestión
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=vhwspfvI52k",
      imgVideo: "../src/assets/images/video/innovation/innovation1.webp",
      formacion: "innovation",
      title: "¿Qué son las Soft Skills?",
      descripcion:
        "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=YhR7Zp8NUzE",
      imgVideo: "../src/assets/images/video/innovation/innovation2.webp",
      formacion: "innovation",
      title: "7 Soft Skills más deseadas por las empresas",
      descripcion:
        "Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? En este #AluraMás vamos a explicarte la importancia de estas habilidades y porque son tan requeridas en el mercado laboral.",
    },
    {
      id: uuid(),
      urlVideo: "https://youtu.be/6N3OkLCfK-0?si=BWDEeqShlKWaGnAR",
      imgVideo: "../src/assets/images/video/innovation/innovation3.webp",
      formacion: "innovation",
      title: "¿Qué son las metodologias ágiles?",
      descripcion:
        "En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles y nos comentará un poco sobre como aplicarlas y cuáles son los beneficios de utilizarlas en su equipo o empresa.",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=hamjv6G5shY",
      imgVideo: "../src/assets/images/video/innovation/innovation4.webp",
      formacion: "innovation",
      title: "Scrum Master",
      descripcion:
        "Las metodología ágiles son muy utilizadas hoy en día en várias empresas, y una matodología muy conocida es Scrum. \nScrum viene con varios procesos, reglas e roles. Uno de estos roles es el de Scrum Master, y es de este rol que vamos hablar en el día de hoy.",
    },
    // Data Science
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=JMKZMa0tMhQ",
      imgVideo: "../src/assets/images/video/datascience/datascience1.webp",
      formacion: "datascience",
      title: "Python para Data Science | Contenidos ONE",
      descripcion:
        "En esta serie de videos en alianza con Oracle, explicaremos y exploraremos las herramientas de Oracle, recibimos a: Santiago Cáceres, quien se desempeña como Cloud engineer en esta empresa. ",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=CpL7-sbW2O0",
      imgVideo: "../src/assets/images/video/datascience/datascience2.webp",
      formacion: "datascience",
      title:
        "Inmersión Datos 2: ¿Cuáles son los próximos pasos en tu carrera de datos?",
      descripcion:
        "Descubre cuáles son los próximos pasos de tu carrera profesional en el sector de los datos, impulsa tu crecimiento, mejora tus competencias y promueve la sintonía entre tus aspiraciones individuales y las tendencias del sector. ¡Es hora de dar el gran paso!",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=7_UXo-aqAeM",
      imgVideo: "../src/assets/images/video/datascience/datascience3.webp",
      formacion: "datascience",
      title: "¿Por qué estudiar Data Science?",
      descripcion: "Porque si",
    },
    {
      id: uuid(),
      urlVideo: "https://www.youtube.com/watch?v=kBVElf0zaqA",
      imgVideo: "../src/assets/images/video/datascience/datascience4.webp",
      formacion: "datascience",
      title:
        "Café Punto Tech 18 | ¿Dónde aplicar la ciencia de datos al día a día?",
      descripcion:
        "El próximo miércoles 22 de marzo, tendremos un nuevo episodio de Café Punto Tech, con invitados muy especiales; la moderadora Gabriela Aguiar platicará con Christian Velasco y Alejandro Gamarra acerca de la aplicación más usual, la Ciencia de datos que se encuentra presente en nuestro día a día, tanto en el ámbito personal como profesional.",
    },
  ];
  const arrayFormaciones = [
    {
      id: "frontend",
      name: "Frontend",
      color: "var(--color-frontend)",
      icon: "../src/assets/images/icono/iconFrontend.svg",
    },
    {
      id: "backend",
      name: "Backend",
      color: "var(--color-backend)",
      icon: "../src/assets/images/icono/iconProgramacion.svg",
    },
    {
      id: "devops",
      name: "Devops",
      color: "var(--color-devops)",
      icon: "../src/assets/images/icono/iconDevops.svg",
    },
    {
      id: "datascience",
      name: "Data Science",
      color: "var(--color-data-science)",
      icon: "../src/assets/images/icono/iconDataScience.svg",
    },
    {
      id: "innovation",
      name: "Innovación y Gestión",
      color: "var(--color-innovation)",
      icon: "../src/assets/images/icono/iconInnovacionGestion.svg",
    },
  ];

  const [videosUse, actualizarVideos] = useState(getInitialVideos);
  // eslint-disable-next-line no-unused-vars
  const [formaciones, actualizarFormaciones] = useState(arrayFormaciones);

  useEffect(() => {
    localStorage.setItem("videosUse", JSON.stringify(videosUse));
  }, [videosUse]);

  function getInitialVideos() {
    const savedVideos = localStorage.getItem("videos");
    return savedVideos ? JSON.parse(savedVideos) : arrayVideos;
  }

  //Agregar video
  const agregarVideo = (video) => {
    actualizarVideos([...videosUse, video]);
  };

  console.log(videosUse);

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer
        className={toggleSearch ? "header__nav--busca--visible" : ""}
      >
        <GlobalStyle />
        <BrowserRouter>
          <Header mostrarBarraBusqueda={mostrarBarraBusqueda} />
          <Routes>
            <Route
              path="/"
              element={<Home videosUse={videosUse} formaciones={formaciones} />}
            />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route
              path="/video/:id"
              element={<Video videosUse={videosUse} />}
            />
            <Route
              path="/video/agregar"
              element={
                <AddVideo
                  agregarVideo={agregarVideo}
                  formaciones={formaciones}
                />
              }
            />
            <Route path="/video/:id/editar" element={<EditVideo />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

const StyledContainer = styled.div`
  transition: transform 0.3s ease;
`;
