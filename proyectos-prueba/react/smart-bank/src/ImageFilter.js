import alimentacion from "./assets/images/alimentacion.svg";
import utilidades from "./assets/images/utilidades.svg";
import salud from "./assets/images/salud.svg";
import transporte from "./assets/images/transporte.svg";
import otros from "./assets/images/otros.svg";

import { IconoTema } from "./Components/UI";

const images = {
    Restaurante: <IconoTema src={alimentacion} alt="Restaurant" />,
    Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
    Salud: <IconoTema src={salud} alt="Salud" />,
    Transporte: <IconoTema src={transporte} alt="YTransporte" />,
    Otros: <IconoTema src={otros} alt="Otros" />,
};

const Image = (props) => {
    const { type } = props;
    return images[type];
};

export default Image;