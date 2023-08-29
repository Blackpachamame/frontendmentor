// import temaOn from "../../assets/images/theme-on.png";
// import temaOff from "../../assets/images/theme-off.png";
// import { Icono } from "../UI";
import { TbBulbFilled, TbBulbOff } from "react-icons/tb";

const SwitcherTema = ({ theme }) => {
  // const claro = <Icono src={temaOn} alt="Tema claro" />;
  // const oscuro = <Icono src={temaOff} alt="Tema oscuro" />;
  return <>{theme ? <TbBulbOff /> : <TbBulbFilled />}</>;
};

export default SwitcherTema;
