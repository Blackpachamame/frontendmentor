import alimentacion from "./assets/images/alimentacion.svg";
import utilidades from "./assets/images/utilidades.svg";
import salud from "./assets/images/salud.svg";
import transporte from "./assets/images/transporte.svg";
import otros from "./assets/images/otros.svg";

import { Icono } from "./Components/UI";

const images = {
    Restaurante: <Icono src={alimentacion} alt="Restaurant" />,
    Utilidades: <Icono src={utilidades} alt="Utilidades" />,
    Salud: <Icono src={salud} alt="Salud" />,
    Transporte: <Icono src={transporte} alt="YTransporte" />,
    Otros: <Icono src={otros} alt="Otros" />,
};

const Image = (props) => {
    const { type } = props;
    return images[type];
};

export default Image;