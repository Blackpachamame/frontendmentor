import { Box, Btn } from "../UI";
import { lista } from "../../info";
import Card from "../Card";

const List = () => {
  return (
    <Box>
      {lista.cargos.map((cargo, i) => {
        return <Card key={i} cargo={cargo} />;
      })}
      <Btn>Ver más</Btn>
    </Box>
  );
};

export default List;
