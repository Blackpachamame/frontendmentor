import { TbBulbFilled, TbBulbOff } from "react-icons/tb";

const SwitcherTema = ({ theme }) => {
  return (
    <>
      {theme ? (
        <TbBulbOff style={{ fontSize: "32px", color: "#202733" }} />
      ) : (
        <TbBulbFilled style={{ fontSize: "32px", color: "#cee3e9" }} />
      )}
    </>
  );
};

export default SwitcherTema;
