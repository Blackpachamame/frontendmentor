import styled from "styled-components";
import { formaciones } from "../../assets/data/formaciones.js";
import FormacionItem from "./FormacionItem";

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 16px;
  padding: 16px 36px;
  @media (max-width: 425px) {
    padding: 16px;
  }
`;

export default function Category() {
  return (
    <CategoryContainer>
      {formaciones.map((item) => {
        return (
          <FormacionItem
            key={item.id}
            name={item.name}
            color={item.color}
            icon={item.icon}
          />
        );
      })}
    </CategoryContainer>
  );
}
